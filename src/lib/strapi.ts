import { siteConfig } from '@/config/site';
import type {
  SchoolLevel,
  Grade,
  Subject,
  Post,
  Document,
  StrapiResponse,
  StrapiSingleResponse,
  StrapiParams,
} from '@/types';
import { API_ENDPOINTS, PAGINATION } from './constants';

class StrapiClient {
  private baseUrl: string;
  private defaultParams: StrapiParams;

  constructor() {
    this.baseUrl = siteConfig.strapiUrl;
    this.defaultParams = {
      populate: ['subject', 'grade', 'schoolLevel', 'cover'],
      pagination: {
        pageSize: PAGINATION.DEFAULT_PAGE_SIZE,
      },
    };
  }

  private async fetch<T>(
    endpoint: string,
    params?: StrapiParams,
    options?: RequestInit,
  ): Promise<T> {
    const searchParams = new URLSearchParams();

    if (params) {
      if (params.populate) {
        const populate = Array.isArray(params.populate)
          ? params.populate.join(',')
          : params.populate;
        searchParams.set('populate', populate);
      }

      if (params.filters) {
        searchParams.set('filters', JSON.stringify(params.filters));
      }

      if (params.sort) {
        const sort = Array.isArray(params.sort) ? params.sort.join(',') : params.sort;
        searchParams.set('sort', sort);
      }

      if (params.pagination) {
        if (params.pagination.page) {
          searchParams.set('pagination[page]', String(params.pagination.page));
        }
        if (params.pagination.pageSize) {
          searchParams.set('pagination[pageSize]', String(params.pagination.pageSize));
        }
      }

      if (params.fields) {
        searchParams.set('fields', params.fields.join(','));
      }
    }

    const url = this.baseUrl + endpoint + (searchParams.toString() ? '?' + searchParams.toString() : '');

    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
      },
      next: { revalidate: 60 },
      ...options,
    });

    if (!response.ok) {
      throw new Error('Strapi API error: ' + response.statusText + ' (' + response.status + ')');
    }

    return response.json();
  }

  // School Levels
  async getSchoolLevels(): Promise<StrapiResponse<SchoolLevel>> {
    return this.fetch<StrapiResponse<SchoolLevel>>(API_ENDPOINTS.SCHOOL_LEVELS, {
      sort: 'order:asc',
      populate: [],
    });
  }

  async getSchoolLevelBySlug(slug: string): Promise<StrapiSingleResponse<SchoolLevel>> {
    const response = await this.fetch<StrapiResponse<SchoolLevel>>(
      API_ENDPOINTS.SCHOOL_LEVELS,
      {
        filters: { slug: { $eq: slug } },
        populate: [],
      },
    );
    return { data: response.data[0], meta: response.meta };
  }

  // Grades
  async getGrades(schoolLevelSlug?: string): Promise<StrapiResponse<Grade>> {
    const filters: Record<string, unknown> = {};
    if (schoolLevelSlug) {
      filters.schoolLevel = { slug: { $eq: schoolLevelSlug } };
    }
    return this.fetch<StrapiResponse<Grade>>(API_ENDPOINTS.GRADES, {
      populate: ['schoolLevel'],
      sort: 'order:asc',
      filters: Object.keys(filters).length > 0 ? filters : undefined,
    });
  }

  // Subjects
  async getSubjects(gradeSlug?: string): Promise<StrapiResponse<Subject>> {
    const filters: Record<string, unknown> = {};
    if (gradeSlug) {
      filters.grade = { slug: { $eq: gradeSlug } };
    }
    return this.fetch<StrapiResponse<Subject>>(API_ENDPOINTS.SUBJECTS, {
      populate: ['grade', 'schoolLevel'],
      sort: 'name:asc',
      filters: Object.keys(filters).length > 0 ? filters : undefined,
    });
  }

  // Posts
  async getPosts(params?: {
    page?: number;
    pageSize?: number;
    subjectSlug?: string;
    gradeSlug?: string;
    schoolLevelSlug?: string;
  }): Promise<StrapiResponse<Post>> {
    const filters: Record<string, unknown> = {};
    if (params?.subjectSlug) {
      filters.subject = { slug: { $eq: params.subjectSlug } };
    }
    if (params?.gradeSlug) {
      filters.grade = { slug: { $eq: params.gradeSlug } };
    }
    if (params?.schoolLevelSlug) {
      filters.schoolLevel = { slug: { $eq: params.schoolLevelSlug } };
    }

    return this.fetch<StrapiResponse<Post>>(API_ENDPOINTS.POSTS, {
      populate: ['subject', 'grade', 'schoolLevel', 'cover'],
      sort: 'publishedAt:desc',
      pagination: {
        page: params?.page || 1,
        pageSize: params?.pageSize || PAGINATION.BLOG_PAGE_SIZE,
      },
      filters: Object.keys(filters).length > 0 ? filters : undefined,
    });
  }

  async getPostBySlug(slug: string): Promise<StrapiSingleResponse<Post>> {
    const response = await this.fetch<StrapiResponse<Post>>(
      API_ENDPOINTS.POSTS,
      {
        filters: { slug: { $eq: slug } },
        populate: ['subject', 'grade', 'schoolLevel', 'cover', 'subject.grade'],
      },
    );
    return { data: response.data[0], meta: response.meta };
  }

  // Documents
  async getDocuments(params?: {
    page?: number;
    pageSize?: number;
    subjectSlug?: string;
  }): Promise<StrapiResponse<Document>> {
    const filters: Record<string, unknown> = {};
    if (params?.subjectSlug) {
      filters.subject = { slug: { $eq: params.subjectSlug } };
    }

    return this.fetch<StrapiResponse<Document>>(API_ENDPOINTS.DOCUMENTS, {
      populate: ['subject', 'file'],
      sort: 'publishedAt:desc',
      pagination: {
        page: params?.page || 1,
        pageSize: params?.pageSize || PAGINATION.DOCUMENTS_PAGE_SIZE,
      },
      filters: Object.keys(filters).length > 0 ? filters : undefined,
    });
  }
}

export const strapi = new StrapiClient();
