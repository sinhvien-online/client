import type { StrapiImage } from './strapi';

export interface SchoolLevel {
  id: number;
  documentId: string;
  name: string;
  slug: string;
  description?: string;
  grades?: Grade[];
}

export interface Grade {
  id: number;
  documentId: string;
  name: string;
  slug: string;
  description?: string;
  subjects?: Subject[];
  schoolLevel?: SchoolLevel;
}

export interface Subject {
  id: number;
  documentId: string;
  name: string;
  slug: string;
  description?: string;
  icon?: string;
  postCount?: number;
  grade?: Grade;
  schoolLevel?: SchoolLevel;
}

export interface Post {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  content: string;
  excerpt?: string;
  cover?: StrapiImage;
  subject?: Subject;
  grade?: Grade;
  schoolLevel?: SchoolLevel;
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
}

export interface Document {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  description?: string;
  file?: StrapiImage | Record<string, unknown>;
  fileSize?: number;
  subject?: Subject;
  grade?: Grade;
  schoolLevel?: SchoolLevel;
  publishedAt: string;
}

export interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export interface StrapiResponse<T> {
  data: T[];
  meta: { pagination: Pagination };
}

export interface StrapiSingleResponse<T> {
  data: T;
  meta: Record<string, unknown>;
}
