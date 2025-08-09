import { OpenAPI } from './generated/core/OpenAPI'

// Ensure generated client hits MSW handlers under /api
OpenAPI.BASE = '/api'


