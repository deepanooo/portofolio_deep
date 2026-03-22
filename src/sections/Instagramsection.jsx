import { useState } from "react";

export const InstagramSection = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const posts = [
    {
      id: 1,
      image: "/projects/image1.jpg",
      title: "Parade UI",
      tag: "Campus",
      href: "https://www.instagram.com/islamiadib/",
    },
    {
      id: 2,
      image: "/projects/image2.jpg",
      title: "Pekan RISTEK 2025",
      tag: "Product & Project Management",
      href: "https://www.instagram.com/islamiadib/",
    },
    {
      id: 3,
      image: "/images/3.jpg",
      title: "Google Developer On Campuss",
      tag: "Company Visit",
      href: "https://www.instagram.com/islamiadib/",
    },
  ];

  return (
    <section id="gallery" className="py-24">
      <div className="container mx-auto px-6">

        <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-4 animated-gradient-text">
          My Gallery
        </h2>

        <p className="text-muted-foreground -mt-2 mb-6">
          Crafting impactful digital experiences through design and creativity.
        </p>

        <div className="grid md:grid-cols-3 gap-6 auto-rows-[250px]">

          {posts.map((post, i) => (
            <div
              key={post.id}
              onClick={() => setSelectedImage(post)}
              className={`cursor-pointer group relative overflow-hidden rounded-3xl ${
                i === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition duration-500" />

              <div className="absolute bottom-6 left-6 right-6">
                <span className="relative -left-2 -top-1 inline-block text-xs text-primary bg-cyan-400/10 px-3 py-1 rounded-full backdrop-blur">
                  {post.tag}
                </span>

                <h3 className="text-white text-2xl font-bold mt-3">
                  {post.title}
                </h3>
              </div>

              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
                <div className="bg-white text-black px-5 py-2 rounded-full font-semibold">
                  View
                </div>
              </div>

              <div className="absolute inset-0 rounded-3xl border border-white/10 group-hover:border-primary transition" />
            </div>
          ))}

        </div>

        {/* 🔥 MODAL FULLSCREEN */}
        {selectedImage && (
          <div
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
          >
            <div className="relative max-w-5xl w-full px-4">

              {/* CLOSE BUTTON */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-6 text-white text-3xl"
              >
                ✕
              </button>

              {/* IMAGE */}
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full max-h-[80vh] object-contain rounded-xl"
              />

              {/* 🔥 BUTTON KE INSTAGRAM */}
              <div className="text-center mt-6">
                <a
                  href={selectedImage.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-black px-6 py-3 rounded-full font-semibold"
                >
                  Open Instagram
                </a>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};