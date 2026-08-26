import Link from 'next/link';
import { Card, CardContent } from '@/components/ui';
import { Badge } from '@/components/ui/badge';
import { formatDate, truncate } from '@/lib/utils';
import type { Post } from '@/types';

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  return (
    <Link href={'/blog/' + post.slug}>
      <Card className="h-full hover:border-blue-200 transition-all">
        {post.cover?.url && (
          <div className="aspect-video relative overflow-hidden rounded-t-xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={post.cover.url}
              alt={post.cover.alternativeText || post.title}
              className="object-cover w-full h-full"
            />
          </div>
        )}
        <CardContent className="p-5">
          <div className="flex items-center gap-2 mb-2">
            {post.subject && (
              <Badge variant="primary">{post.subject.name}</Badge>
            )}
            {post.schoolLevel && (
              <Badge>{post.schoolLevel.name}</Badge>
            )}
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
            {post.title}
          </h3>
          {post.excerpt && (
            <p className="text-sm text-gray-600 line-clamp-3 mb-3">
              {truncate(post.excerpt, 120)}
            </p>
          )}
          <div className="flex items-center justify-between text-xs text-gray-500">
            <span>{formatDate(post.publishedAt)}</span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
