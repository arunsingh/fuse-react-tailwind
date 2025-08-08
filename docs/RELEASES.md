### Release Process

Versioning: Semantic Versioning (MAJOR.MINOR.PATCH)

Workflow
- Create a branch for features/fixes
- Merge to `master` via PR with labels `feat`, `fix`, `docs`, etc.
- Update `CHANGELOG.md`
- Tag a release: `git tag -a vX.Y.Z -m "Release vX.Y.Z" && git push origin vX.Y.Z`
- GitHub Actions will build on push and on PRs

Cadence
- v0.x weekly minor releases; Patch as needed
- v1.0 when production-grade checklists are complete (A11y, RBAC, Tests, Perf)


