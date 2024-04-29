# ContriBoost

This Solidity contract is a contribution system that allows participants to join, deposit funds, and then distributes those funds randomly among the participants at the end of each segment. Let's break down the code:

## Contract Structure
- The contract is named ContributionSystem.
- It uses Solidity version ^0.8.19.
- The SPDX-License-Identifier is set to MIT, indicating the license under which the contract's code is available.

## State Variables
- `host`: Stores the address of the contract deployer, who is also the host of the contribution system.
- `dayRange`: Represents the duration of each segment in days.
- `expectedNumber`: Specifies the expected number of participants.
- `currentSegment`: Tracks the current segment.
- `contributionAmount`: Indicates the expected amount each participant should contribute.
- `tokenAddress`: Stores the address of the ERC20 token used for contributions.
- `participants`: Maps participant addresses to their Participant struct.
- `participantList`: Stores the addresses of all participants.
- `totalAmount`: Total amount of tokens in the contract.

## Participant Struct
Defines the Participant struct with fields for id, depositAmount, lastDepositTime, existence status, and whether they've received funds.

## Events
- `Deposit`: Triggered when a participant makes a deposit.
- `FundsTransferred`: Triggered when funds are transferred from the contract to a participant.
- `SegmentEnd`: Triggered when a segment ends.

## Constructor
Initializes contract variables including host, dayRange, expectedNumber, contributionAmount, and tokenAddress.

## Modifiers
- `onlyHost`: Restricts access to functions only to the contract host.
- `canJoin`: Ensures that only non-participants can join.

## Functions
- `join`: Allows participants to join the system by adding them to participantList.
- `deposit`: Allows participants to deposit funds into the contract.
- `distributeFunds`: Distributes funds to a random participant at the end of each segment, deducts 2% as the host share, and increments the segment count.
- `getRandomParticipant`: Returns a random participant from the participantList.
- `withdraw`: Allows the contract host to withdraw remaining funds.
- `requestRandomWords`: Requests a random number from the VRF Coordinator.
- `fulfillRandomWords`: Callback function that fulfills the random number request and transfers funds to the randomly chosen participant.

## ContributionSystemFactory Contract
This contract allows deploying multiple instances of the ContributionSystem contract.

## Functions
- `createContributionSystem`: Allows creating a new instance of the ContributionSystem contract.
- `getDeployedSystems`: Returns the list of deployed systems.
- `getSystemsByCreator`: Returns systems deployed by a specific creator.

## Explanation of Changes
- The `distributeFunds` function now checks if the expected number of participants has been met before distributing funds.
- The `deposit` function allows participants to deposit funds incrementally over the day range.
- This contract aims to create a fair and transparent contribution system where funds are distributed randomly among participants at the end of each segment.

## Contract Address
[Contribution System contract Address](https://sepolia.scrollscan.com/address/0xf4d773a3f6c4042a1f2005d0784c2437796201a4)


[Factory Contract Address](https://sepolia.scrollscan.com/address/0x7e10bb15778f5558bf4dbd1701acefd56443e1a4)