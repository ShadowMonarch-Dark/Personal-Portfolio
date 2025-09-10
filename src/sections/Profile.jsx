import React from "react";

export default function Profile() {
  const profiles = [
    {
      title: "Codeforces – 1257 Rating",
      description:
        "Pupil on Codeforces with 1257 rating, solved 600+ problems and actively improving through contests.",
      img: "assets/profilion/Codeforces(1).png",
      link: "https://codeforces.com/profile/ShadowMonarch",
    },
    {
      title: "LeetCode – 1713+ Rating",
      description:
        "Solved 850+ problems with a rating of 1713+, focusing on mastering Data Structures and Algorithms.",
      img: "assets/profilion/LEETCODE(20).png",
      link: "https://leetcode.com/u/Jin-Woo_Shadow/",
    },
    {
      title: "CodeChef – 1763 Rating",
      description:
        "3★ Coder on CodeChef with a rating of 1763, solving problems and participating in rated contests.",
      img: "assets/profilion/CODECHEF.png",
      link: "https://www.codechef.com/users/abyss_monarch", // replace with yours
    },
    {
      title: "AtCoder – 636+ Rating",
      description:
        "Brown coder on AtCoder with a rating over 636, actively learning from global competitions.",
      img: "assets/profilion/ATCODER.png",
      link: "https://atcoder.jp/users/ShaDowGoD", // replace with yours
    },
    {
      title: "Coding Ninjas – 1649 Rating",
      description:
        "Solved 150+ structured problems with a rating of 1649 on Coding Ninjas platform.",
      img: "assets/profilion/NINJA.png",
      link: "https://www.codingninjas.com/studio/profile/dkmillion", // replace
    },
    {
      title: "Codolio – Global Rank 1507",
      description:
        "Codolio aggregates my profiles (CF, LC, CodeChef, etc.) with a current global rank of 1507.",
      img: "assets/profilion/profileCard.png",
      link: "https://www.codolio.com/profile/ShaDow_GOD", // replace
    },
  ];

  return (
    <section
      className="min-h-screen py-12 px-6 md:px-20 mt-[10%]"
      id="profiles"
    >
      <h1 className="text-4xl font-bold mb-10">Coding Profiles</h1>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {profiles.map((item, index) => (
          <div
            key={index}
            className="grid-glass-effect p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-200"
          >
            {item.img && (
              <img
                src={item.img}
                alt={item.title}
                className="rounded-xl w-full h-48 object-contain mx-auto my-3 bg-white"
              />
            )}
            <h2 className="text-lg font-semibold text-white mb-2">
              {item.title}
            </h2>
            <p className="text-gray-300 text-sm mb-3">{item.description}</p>
            {item.link && (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-aqua underline text-sm mt-2 inline-block"
              >
                View Profile →
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
