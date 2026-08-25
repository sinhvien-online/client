import { describe, it, expect } from 'vitest';
import { API_ENDPOINTS, PAGINATION } from '../src/lib/constants';

describe('Client Strapi BFF Integration & Constants', () => {
  it('should define correct API endpoints for Strapi 5 resources', () => {
    expect(API_ENDPOINTS.POSTS).toBe('/api/posts');
    expect(API_ENDPOINTS.DOCUMENTS).toBe('/api/documents');
    expect(API_ENDPOINTS.SUBJECTS).toBe('/api/subjects');
    expect(API_ENDPOINTS.GRADES).toBe('/api/grades');
    expect(API_ENDPOINTS.SCHOOL_LEVELS).toBe('/api/school-levels');
  });

  it('should have standard pagination defaults', () => {
    expect(PAGINATION.DEFAULT_PAGE_SIZE).toBeDefined();
    expect(typeof PAGINATION.DEFAULT_PAGE_SIZE).toBe('number');
    expect(PAGINATION.DEFAULT_PAGE_SIZE).toBeGreaterThan(0);
  });

  it('should construct valid query strings for Strapi pagination and filters', () => {
    const params = new URLSearchParams();
    params.set('pagination[page]', '1');
    params.set('pagination[pageSize]', '10');
    params.set('populate', 'subject,grade,schoolLevel');

    const queryString = params.toString();
    expect(queryString).toContain('pagination%5Bpage%5D=1');
    expect(queryString).toContain('pagination%5BpageSize%5D=10');
    expect(queryString).toContain('populate=subject%2Cgrade%2CschoolLevel');
  });
});
