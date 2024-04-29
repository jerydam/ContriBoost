// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract ContributionSystem {
    struct Participant {
        uint id;
        uint depositAmount;
        uint lastDepositTime;
        bool exists;
        bool receivedFunds;
    }
    
    string public name;
    address public host;
    uint public dayRange;
    uint public expectedNumber;
    uint public currentSegment;
    uint public contributionAmount;
    mapping(address => Participant) public participants;
    address[] public participantList;

    event Deposit(address indexed participant, uint amount);
    event FundsTransferred(address indexed from, address indexed to, uint amount);
    event SegmentEnd(uint segmentNumber);

    constructor(uint _dayRange, uint _expectedNumber, uint _contributionAmount, string memory _name) {
        require(_dayRange > 0, "Day range must be greater than zero");
        require(_expectedNumber > 0, "Expected number must be greater than zero");
        require(_contributionAmount > 0, "Contribution amount must be greater than zero");
        
        host = msg.sender;
        dayRange = _dayRange;
        expectedNumber = _expectedNumber;
        contributionAmount = _contributionAmount;
        currentSegment = 1;
        name = _name;
    }

    modifier onlyHost() {
        require(msg.sender == host, "Only the host can call this function");
        _;
    }

    modifier canJoin() {
        require(msg.sender != address(0), "Invalid participant address");
        require(!participants[msg.sender].exists, "You are already a participant");
        _;
    }

    function join() external payable canJoin {
        Participant storage participant = participants[msg.sender];
        participant.id = participantList.length + 1;
        participant.exists = true;
        participantList.push(msg.sender);
        emit Deposit(msg.sender, msg.value);
    }

    function deposit() external payable {
        Participant storage participant = participants[msg.sender];
        require(participant.exists, "You are not a participant");
        require(block.timestamp >= participant.lastDepositTime + dayRange * 1 days, "You can only deposit once per segment");
        require(msg.value == contributionAmount, "Please send the exact deposit amount");

        participant.depositAmount += msg.value;
        participant.lastDepositTime = block.timestamp;
        emit Deposit(msg.sender, msg.value);
    }

    function distributeFunds() external onlyHost {
        require(participantList.length == expectedNumber, "Expected number of participants not reached");
        require(currentSegment <= expectedNumber, "All segments have been completed");

        uint totalAmount = address(this).balance;

        // Calculate 2% share for the host
        uint hostShare = totalAmount * 2 / 100;
        payable(msg.sender).transfer(hostShare);

        // Deduct host share from the total amount
        totalAmount -= hostShare;

        // Iterate through the participant list
        for (uint i = 0; i < participantList.length; i++) {
            address participant = participantList[i];

            // Skip participants who have already received funds
            if (participants[participant].receivedFunds) {
                continue;
            }

            // Transfer funds to the participant
            payable(participant).transfer(contributionAmount);
            participants[participant].receivedFunds = true;
            emit FundsTransferred(address(this), participant, contributionAmount);

            // Decrement remaining total amount
            totalAmount -= contributionAmount;

            // Increment segment count
            currentSegment++;

            // If all segments have been completed, reset segment count and emit event
            if (currentSegment > expectedNumber) {
                currentSegment = 1;
                emit SegmentEnd(expectedNumber);
                break;
            }
        }

        // Transfer any remaining funds to the host
        if (totalAmount > 0) {
            payable(msg.sender).transfer(totalAmount);
        }
    }

    function getAllParticipants() external view returns (address[] memory) {
        return participantList;
    }

    function withdraw() external onlyHost {
        uint totalAmount = address(this).balance;
        payable(msg.sender).transfer(totalAmount);
    }
}
