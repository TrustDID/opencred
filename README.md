# OpenCred

OpenCred is a decentralized credential passport project built on Stellar and Soroban.

## Project Purpose

OpenCred is designed to enable organizations to issue verifiable credentials and individuals to present identity proofs without centralized credential storage. The monorepo is structured to support backend, frontend, and smart contract contributions in a clean, modular way.

## Monorepo Architecture

- `apps/api` — NestJS backend scaffold with feature modules for auth, users, issuers, credentials, verification, blockchain, IPFS, and shared common logic.
- `apps/web` — Next.js frontend scaffold for the contributor-facing web application.
- `packages/contracts` — Rust-based Soroban smart contract scaffold for credential registry logic on Stellar.
- `packages/sdk` — Shared SDK package for types and utility helpers.
- `packages/stellar` — Stellar-specific helpers and services for Horizon transactions and Stellar integration.
- `docs/architecture` — architecture documentation and design guides.
- `.github/ISSUE_TEMPLATE` — contributor-facing issue templates for backend, frontend, smart contract, and documentation work.

## Getting Started

This repository is intentionally a scaffold. It does not include business logic, PostgreSQL configuration, TypeORM configuration, or database entities. Those are left for contributors via issues.

1. Install dependencies in the repo root.
2. Use `npm run dev` to run the workspace pipelines.
3. Explore the module scaffolds under `apps/api` and `apps/web`.
4. Review architecture docs under `docs/architecture`.

## Contributing

Choose tasks using the issue templates in `.github/ISSUE_TEMPLATE/`:

- `backend-task.md` — backend and NestJS work
- `frontend-task.md` — Next.js web app improvements
- `smart-contract-task.md` — Soroban contract design and implementation
- `documentation-task.md` — docs and onboarding content

The initial scaffold is intentionally lightweight and contributor-friendly. If you'd like to help shape the project, start with architecture and issue planning before implementing business logic.
