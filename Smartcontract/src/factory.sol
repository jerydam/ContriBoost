// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "./contriboost.sol";

contract Factory {
    struct SystemInfo {
        address systemAddress;
        address creator;
        string name;
        uint dayRange;
        uint expectedNumber;
        uint contributionAmount;
        address tokenAddress;
    }

    mapping(address => SystemInfo[]) public systemsByCreator;
    mapping(address => address) public systemByCreatorAndName;
    address[] public deployedSystems;

    event ContributionSystemCreated(address indexed newSystem, address indexed creator);
    
    function createContribution_System(
        uint _dayRange,
        uint _expectedNumber,
        uint _contributionAmount,
        string memory _name
    ) external {
        ContributionSystem newSystem = new ContributionSystem(
            _dayRange,
            _expectedNumber,
            _contributionAmount,
            _name
        );
        deployedSystems.push(address(newSystem));
        emit ContributionSystemCreated(address(newSystem), msg.sender);

        SystemInfo memory info;
        info.systemAddress = address(newSystem);
        info.creator = msg.sender;
        info.name = _name;
        info.dayRange = _dayRange;
        info.expectedNumber = _expectedNumber;
        info.contributionAmount = _contributionAmount;
        systemsByCreator[msg.sender].push(info);
        systemByCreatorAndName[msg.sender] = address(newSystem);
    }

    function getDeployedSystems() external view returns (address[] memory) {
        return deployedSystems;
    }

    function getSystemsByCreator(address _creator) external view returns (SystemInfo[] memory) {
        return systemsByCreator[_creator];
    }

    function getCreator(address _systemAddress) external view returns (address) {
        for (uint i = 0; i < deployedSystems.length; i++) {
            if (deployedSystems[i] == _systemAddress) {
                return systemsByCreator[msg.sender][i].creator;
            }
        }
        revert("System not found");
    }

    function getSystemDetails(address _systemAddress) external view returns (SystemInfo memory) {
        for (uint i = 0; i < deployedSystems.length; i++) {
            if (deployedSystems[i] == _systemAddress) {
                return systemsByCreator[msg.sender][i];
            }
        }
        revert("System not found");
    }

    function getDeployedSystemOfSender() external view returns (address) {
        return systemByCreatorAndName[msg.sender];
    }
}
