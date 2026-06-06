import React, { useEffect, useState } from 'react';

const GithubStats = () => {
  const [profile, setProfile] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGithubData = async () => {
      try {
        const profileRes = await fetch('https://api.github.com/users/DivyanshuNathTripathi');
        if (!profileRes.ok) throw new Error("Profile fetch failed");
        const profileData = await profileRes.ok ? await profileRes.json() : null;
        setProfile(profileData);

        const reposRes = await fetch('https://api.github.com/users/DivyanshuNathTripathi/repos?sort=updated&per_page=6');
        if (reposRes.ok) {
          const reposData = await reposRes.json();
          setRepos(reposData);
        }
      } catch (err) {
        console.error("Github API error, using fallback state: ", err);
        // Fallback mock data in case of API rate limits
        setProfile({
          public_repos: 18,
          followers: 12,
          following: 15,
          bio: "Computer Science Student | Full Stack Developer | AI Enthusiast"
        });
        setRepos([
          { name: "Sign-Language-Detection", description: "Real-time sign language recognition using Python, OpenCV, and Deep Learning.", language: "Python" },
          { name: "CALLER-AI", description: "Automated calling system integrated with Twilio and GCP services.", language: "JavaScript" },
          { name: "Prayukti-Virtual-Lab", description: "Remote practical lab experiment simulation workspace.", language: "JavaScript" }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchGithubData();
  }, []);

  return (
    <section className="bg-white py-28 px-6 md:px-12 w-full relative overflow-hidden font-sans bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px]">
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center md:text-left mb-16" data-aos="fade-up">
          <div className="inline-block border border-gray-300 rounded-full px-5 py-1.5 text-xs md:text-sm text-gray-600 font-bold mb-4 shadow-sm bg-white">
            Open Source
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.1] tracking-tight">
            GitHub Activities
          </h2>
        </div>

        {/* Loading State */}
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-red-600"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Stats profile Card */}
            <div data-aos="fade-right" className="bg-white border border-gray-200 rounded-3xl p-6 shadow-md flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center text-white font-black text-2xl font-mono">
                    DN
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-gray-900">Divyanshu Nath Tripathi</h3>
                    <p className="text-xs text-gray-400 font-mono">@DivyanshuNathTripathi</p>
                  </div>
                </div>

                <p className="text-sm text-gray-600 leading-relaxed italic mb-8">
                  "{profile?.bio || 'Building scalable web applications & ML solutions.'}"
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4 border-t border-gray-100 pt-6">
                <div className="text-center">
                  <span className="block text-2xl font-black text-red-600">{profile?.public_repos || 0}</span>
                  <span className="text-[10px] font-mono text-gray-400 uppercase font-bold">Repos</span>
                </div>
                <div className="text-center">
                  <span className="block text-2xl font-black text-red-600">{profile?.followers || 0}</span>
                  <span className="text-[10px] font-mono text-gray-400 uppercase font-bold">Followers</span>
                </div>
                <div className="text-center">
                  <span className="block text-2xl font-black text-red-600">{profile?.following || 0}</span>
                  <span className="text-[10px] font-mono text-gray-400 uppercase font-bold">Following</span>
                </div>
              </div>
            </div>

            {/* Repos Grid */}
            <div data-aos="fade-left" className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {repos.slice(0, 4).map((repo) => (
                <a 
                  key={repo.name} 
                  href={repo.html_url || `https://github.com/DivyanshuNathTripathi/${repo.name}`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white border border-gray-200 hover:border-red-500/50 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <h4 className="font-black text-gray-900 hover:text-red-600 transition-colors text-base break-words">
                      {repo.name}
                    </h4>
                    <p className="text-xs text-gray-500 leading-relaxed mt-2 line-clamp-2">
                      {repo.description || "No description provided."}
                    </p>
                  </div>

                  {repo.language && (
                    <span className="inline-block mt-4 text-[10px] font-mono font-bold text-red-500 uppercase tracking-wider">
                      ● {repo.language}
                    </span>
                  )}
                </a>
              ))}
            </div>

          </div>
        )}

      </div>
    </section>
  );
};

export default GithubStats;
