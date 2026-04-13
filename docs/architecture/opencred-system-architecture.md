# OpenCred System Architecture

OpenCred is a decentralized credential passport system built on Stellar and Soroban.

## Purpose

OpenCred enables organizations to issue verifiable credentials and individuals to present proof of identity without centralized credential stores.

## Architecture Overview

- `apps/api` — NestJS backend scaffold that will host REST and GraphQL APIs for issuing, managing, and verifying credentials.
- `apps/web` — Next.js frontend scaffold for a contributor-facing dApp user interface.
- `packages/contracts` — Rust-based Soroban smart contract scaffolding for credential registry logic on Stellar.
- `packages/sdk` — Shared SDK layer for typed operations, payloads, and helpers.
- `packages/stellar` — Stellar-specific helpers and services for transaction orchestration.

## Contributor Workflow

Contributors should select work from issue templates under `.github/ISSUE_TEMPLATE/`.
Future implementation work will include module behavior, smart contract logic, and integration between API, web, and Stellar.
