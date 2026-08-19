export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <h1>Bai viet: {slug}</h1>
    </div>
  );
}
