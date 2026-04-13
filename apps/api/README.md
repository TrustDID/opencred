# OpenCred API

This NestJS app is the backend scaffold for OpenCred.

## Structure

- `src/main.ts` — application bootstrap.
- `src/app.module.ts` — root application module.
- `src/modules/` — feature modules for auth, users, issuers, credentials, verification, blockchain, IPFS, and common.

## Notes

This scaffold intentionally does not include database connection setup, PostgreSQL configuration, TypeORM integration, or entity definitions. Those responsibilities are left to contributors via open issues.
