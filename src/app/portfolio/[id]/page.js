"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { projects } from "@/data/projectsData";
import Header from "@/components/project/Header";
import Client from "@/components/project/Client";
import Challenge from "@/components/project/Challenge";
import Solution from "@/components/project/Solution";
import Tools from "@/components/project/Tools";
import Results from "@/components/project/Results";
import CTA from "@/components/project/CTA";
import Navigation from "@/components/project/Navigation";
import Share from "@/components/project/Share";
import Lightbox from "@/components/project/Lightbox";
import "./ProjectPage.css";

export default function ProjectPage() {
  const { id } = useParams(); // 👈 هنا بناخد param من URL
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) {
      setError("معرف المشروع غير متوفر");
      setLoading(false);
      return;
    }

    const foundProject = projects.find((p) => p.id === id);
    if (foundProject) {
      setProject(foundProject);
      setLoading(false);
    } else {
      setError("لم يتم العثور على المشروع");
      setLoading(false);
    }
  }, [id]);

  if (loading) {
    return (
      <div className="vp-page" dir="rtl">
        <div className="vp-container text-center py-16">
          <p className="text-lg text-gray-600">جاري التحميل...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="vp-page" dir="rtl">
        <div className="vp-container text-center py-16">
          <p className="text-lg text-red-600">{error}</p>
          <a
            href="/portfolio"
            className="vp-btn vp-btn--primary mt-4 inline-block"
          >
            العودة إلى معرض الأعمال
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="vp-page" dir="rtl">
      <Header project={project} />
      <Client project={project} />
      <Challenge project={project} />
      <Solution project={project} />
      <Tools project={project} />
      <Results project={project} />
      <CTA />
      <Navigation project={project} />
      <Share project={project} />
      <Lightbox project={project} />
    </div>
  );
}
