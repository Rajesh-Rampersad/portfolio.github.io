import React from 'react';
import { notFound } from 'next/navigation';
import { projects } from '@/data/projects';
import ProjectDetailClient from '@/components/ProjectDetailClient';

// Enable Server-Side static rendering at build-time (Required for static export output)
export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetailServer({ params }: { params: Promise<{ slug: string }> }) {
  // Await the parameters since they can be a Promise in Next.js 15+
  const resolvedParams = await params;
  const project = projects.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetailClient project={project} />;
}
