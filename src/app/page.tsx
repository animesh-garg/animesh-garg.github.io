"use client"
import React, { useState } from "react";
import { EducationEntry } from "@/components/education-entry";
import { educationData } from "@/data/education";
import { PublicationEntry } from "@/components/publication-entry";
import { publicationData } from "@/data/publication";
import { ProfileSection } from "@/components/profile-section";
import { aboutMe } from "@/data/aboutme";
import { NewsEntry } from "@/components/news-entry";
import { newsData } from "@/data/news";
import { ExperienceEntry } from "@/components/experience-entry";
import { experienceData } from "@/data/experience";
import { PortfolioEntry } from "@/components/portfolio-entry";
import { portfolioData } from "@/data/portfolio";
import { TeachingEntry } from "@/components/teaching-entry";
import { teachingData } from "@/data/teaching";
import { TalksEntry } from "@/components/talks-entry";
import { talksData } from "@/data/talks";
import { sectionOrder, Section } from "@/data/section-order";

export default function Home() {
  const [showMoreNews, setShowMoreNews] = useState(false); //state for show more button in news
  const [showMoreTalks, setShowMoreTalks] = useState(false); //state for show more button in news

  return (
    <div className="min-h-screen bg-[#FFFCF8]">
      {/* Don't have a great call on whether max-w-screen-xl is better */}
      <div className="max-w-7xl mx-auto px-8 py-24">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-1">
          {/* Left Column - Fixed Info */}
          <div className="col-span-12 md:col-span-4 space-y-12 mb-8 md:mb-0">
            {/* Profile */}
            <div className="md:sticky top-12 space-y-8">
              <ProfileSection aboutMe={aboutMe} />
            </div>
          </div>

          {/* Right Column - Scrolling Content */}
          <div className="col-span-12 md:col-span-8 md:col-start-5 space-y-12">
            {/* About section is typically first */}
            {aboutMe.description && (
              <section>
                <p
                  className="font-serif text-base leading-relaxed text-zinc-700 [&_a]:underline [&_a]:text-zinc-900 [&_a:hover]:text-zinc-600"
                  dangerouslySetInnerHTML={{ __html: aboutMe.description }}
                />
              </section>
            )}

            {/* Map through sectionOrder to render sections in correct order */}
            {sectionOrder.map((sectionName) => {
              // Most of this is redundant... but in case it needs to be unique.
              switch (sectionName) {
                case Section.News:
                  const newsListToShow = 5; // Number of news items to show initially          
                  return (                    
                    newsData.length > 0 && (
                      <section key={sectionName}>
                        <h2 className="font-serif text-xl mb-8 tracking-wide uppercase">
                          News
                        </h2>
                        <div className="space-y-4">
                          {(showMoreNews
                            ? newsData
                            : newsData.slice(0, newsListToShow)
                          ).map((news, index) => (
                            <div key={index}>
                              <NewsEntry news={news} />
                            </div>
                          ))}
                          {newsData.length > newsListToShow && (
                            <button
                              className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors duration-300"
                              onClick={() => setShowMoreNews(!showMoreNews)}
                            >
                              {showMoreNews ? "Show Less" : "Show More"}
                            </button>
                          )}
                        </div>                        
                      </section>
                    )
                  );
                case Section.Education:
                  return (
                    educationData.length > 0 && (
                      <section key={sectionName}>
                        <h2 className="font-serif text-xl mb-8 tracking-wide uppercase">
                          Education
                        </h2>
                        <div className="space-y-4">
                          {educationData.map((education, index) => (
                            <EducationEntry key={index} education={education} />
                          ))}
                        </div>
                      </section>
                    )
                  );
                case Section.Publication:
                  return (
                    publicationData.length > 0 && (
                      <section key={sectionName}>
                        <h2 className="font-serif text-xl mb-8 tracking-wide uppercase">
                          Publications
                        </h2>
                        <div className="space-y-4">
                          {publicationData.map((publication, index) => (
                            <div key={index}>
                              <PublicationEntry publication={publication} />
                              {index < publicationData.length - 1 && (
                                <div className="h-px bg-zinc-200 my-8" />
                              )}
                            </div>
                          ))}
                        </div>
                      </section>
                    )
                  );
                case Section.Experience:
                  return (
                    experienceData.length > 0 && (
                      <section key={sectionName}>
                        <h2 className="font-serif text-xl mb-8 tracking-wide uppercase">
                          Experience
                        </h2>
                        <div className="space-y-4">
                          {experienceData.map((experience, index) => (
                            <ExperienceEntry
                              key={index}
                              experience={experience}
                            />
                          ))}
                        </div>
                      </section>
                    )
                  );
                case Section.Portfolio:
                  return (
                    portfolioData.length > 0 && (
                      <section key={sectionName}>
                        <h2 className="font-serif text-xl mb-8 tracking-wide uppercase">
                          Portfolio
                        </h2>
                        <div className="space-y-4">
                          {portfolioData.map((portfolio, index) => (
                            <PortfolioEntry key={index} portfolio={portfolio} />
                          ))}
                        </div>
                      </section>
                    )
                  );
                case Section.Teaching:
                  return (
                    teachingData.length > 0 && (
                      <section key={sectionName}>
                        <h2 className="font-serif text-xl mb-8 tracking-wide uppercase">
                          Teaching
                        </h2>
                        <div className="space-y-4">
                          {teachingData.map((teaching, index) => (
                            <TeachingEntry key={index} teaching={teaching} />
                          ))}
                        </div>
                      </section>
                    )
                  );
                case Section.Talks:
                    const talksListToShow = 3; // Number of talks items to show initially          
                    return (
                      talksData.length > 0 && (
                        <section key={sectionName}>
                          <h2 className="font-serif text-xl mb-8 tracking-wide uppercase">
                            Recent Talks
                          </h2>
                          <div className="space-y-4">
                            {/* {talksData.map((talks, index) => (
                              <TalksEntry key={index} talks={talks} />
                            ))} */}
                            {(showMoreTalks
                              ? talksData
                              : talksData.slice(0, talksListToShow)
                            ).map((talks, index) => (
                              <div key={index}>
                                <TalksEntry talks={talks} />
                              </div>
                            ))}
                            {talksData.length > talksListToShow && (
                              <button
                                className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors duration-300"
                                onClick={() => setShowMoreTalks(!showMoreTalks)}
                              >
                                {showMoreTalks ? "Show Less" : "Show More"}
                              </button>
                            )}
                          </div>
                        </section>
                      )
                    );                    
                default:
                  return null;
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
