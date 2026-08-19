import Link from 'next/link';
import { Card, CardContent } from '@/components/ui';
import type { SchoolLevel } from '@/types';

interface LevelNavProps {
  levels: SchoolLevel[];
}

const levelIcons: Record<string, string> = {
  'dai-hoc': '🎓',
  'thpt': '📚',
  'thcs': '📖',
};

export function LevelNav({ levels }: LevelNavProps) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
      {levels.map((level) => (
        <Link key={level.id} href={'/' + level.slug}>
          <Card className="text-center hover:border-blue-200 hover:shadow-lg transition-all group">
            <CardContent className="p-8">
              <div className="text-4xl mb-4">
                {levelIcons[level.slug] || '📚'}
              </div>
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                {level.name}
              </h3>
              {level.description && (
                <p className="mt-2 text-sm text-gray-600">{level.description}</p>
              )}
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
}
