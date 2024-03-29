import { BiEnvelope, BiFile } from "react-icons/bi";
import Image from "next/image";
import { getProfiles } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";

export default async function About() {
    const profiles = await getProfiles();
  console.log(profiles)
    return (
      <main className="lg:max-w-7xl mx-auto max-w-3xl md:px-16 px-6">
        {profiles &&
          profiles.map((profile) => (
            <div key={profile._id}>
              <section className="grid lg:grid-cols-2 grid-cols-1 gap-x-6 justify-items-center">
                <div className="order-2 lg:order-none">
                  <h1 className="lg:text-5xl text-4xl lg:leading-tight basis-1/2 font-bold mb-8">
                    I&apos;m {profile.fullName}. I live in {profile.location}, where I
                    design the future.
                  </h1>
                  <div className="flex flex-col gap-y-3 text-zinc-400 leading-relaxed">
                    <PortableText value={profile.fullBio} />
                  </div>
                </div>
                <div className="flex flex-col lg:justify-self-center justify-self-start gap-y-8 lg:order-1 order-none mb-12">
                  <div>
                    <Image
                      className="rounded-2xl mb-4 object-cover max-h-96 min-h-96 bg-top bg-[#1d1d20]"
                      src={profile.profileImage.image}
                      width={400}
                      height={400}
                      quality={100}
                      alt={profile.profileImage.alt} />
                    <a
                      href={`${profile.resumeURL}?dl=${profile.fullName}_resume`}
                      className="flex items-center justify-center gap-x-2 bg-[#1d1d20] border border-transparent hover:border-zinc-700 rounded-md duration-200 py-2 text-center cursor-cell font-medium">
                      <BiFile className="text-base" /> Download CV
                    </a>
                  </div>
  
                  <ul>
                    <li>
                      <a
                        href={`mailto:${profile.email}`}
                        className="flex items-center gap-x-2 hover:text-purple-400 duration-300">
                        <BiEnvelope className="text-lg" />
                        {profile.email}
                      </a>
                    </li>
                  </ul>
                </div>
              </section>
  
              <section className="mt-24 max-w-2xl">
                <h2 className="font-semibold text-4xl mb-4">Skills</h2>
                <p className="text-zinc-400 max-w-lg">
                  I&apos;ve spent few years developing my skills. Here are a few of them:
                </p>
  
                <ul className="flex flex-wrap items-center gap-3 mt-8">
                  {profile.skills.map((skill, id) => (
                    <li
                      key={id}
                      className="bg-[#1d1d20] border border-transparent hover:border-zinc-700 rounded-md px-2 py-1">
                      {skill}
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          ))}
      </main>
    );
  }