import Link from 'next/link';
import { Card, CardContent } from '@/components/ui';
import type { Subject } from '@/types';

interface SubjectGridProps {
  subjects: Subject[];
  basePath: string;
}

export function SubjectGrid({ subjects, basePath }: SubjectGridProps) {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      {subjects.map((subject) => (
        <Link key={subject.id} href={basePath + '/' + subject.slug}>
          <Card className="h-full hover:border-blue-200 hover:shadow-md transition-all">
            <CardContent className="p-4 text-center">
              <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-blue-100 flex items-center justify-center">
                <span className="text-lg font-bold text-blue-600">
                  {subject.name.charAt(0)}
                </span>
              </div>
              <h3 className="text-sm font-medium text-gray-900">{subject.name}</h3>
              {subject.postCount !== undefined && (
                <p className="mt-1 text-xs text-gray-500">
                  {subject.postCount} bài viết
                </p>
              )}
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
}
