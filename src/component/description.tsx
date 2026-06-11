"use client";

export default function IndonesiaSDGSection() {
  const facts = [
    {
      number: "258M",
      title: "Populasi",
      description: "Indonesia memiliki populasi terbesar ke-4 di dunia"
    },
    {
      number: "65%",
      title: "Akses Air Bersih",
      description: "Akses penduduk Indonesia ke air bersih di perumahan masih membutuhkan peningkatan"
    },
    {
      number: "45%",
      title: "Sanitasi Dasar",
      description: "Masih banyak daerah perumahan dengan sistem sanitasi yang tidak layak"
    },
    {
      number: "89%",
      title: "Urbanisasi",
      description: "89% penduduk perkotaan menghadapi tantangan air dan sanitasi"
    },
    {
      number: "2030",
      title: "Target SDGs",
      description: "Target universal akses air bersih dan sanitasi harus tercapai tahun 2030"
    }
  ];

  const sdg6Issues = [
    {
      title: "Akses Air Bersih di Perumahan",
      issues: [
        "Infrastruktur pipa air yang rusak menyebabkan kehilangan 30-40% air",
        "Sumur bor yang terkontaminasi limbah industri dan pertanian",
        "Biaya akses air bersih yang tinggi untuk masyarakat perumahan kurang mampu",
        "Distribusi air yang tidak merata antara wilayah perkotaan dan pinggiran"
      ]
    },
    {
      title: "Sistem Sanitasi di Kampung/Perumahan",
      issues: [
        "Septik tank yang tidak memenuhi standar kesehatan di perumahan padat",
        "Sistem pembuangan limbah yang mencemari sumber air tanah",
        "Kualitas air limbah yang belum memenuhi standar lingkungan sebelum dibuang",
        "Kurangnya infrastruktur pengolahan air limbah komunal"
      ]
    },
    {
      title: "Dampak pada Kesehatan",
      issues: [
        "Penyakit berbasis air seperti diare masih tinggi di permukiman informal",
        "Malnutrisi anak akibat air tidak bersih di area perumahan padat",
        "Penyakit kulit dan infeksi yang menyebar di komunitas dengan sanitasi buruk",
        "Tingkat kematian ibu dan bayi yang berkaitan dengan air tidak bersih"
      ]
    },
    {
      title: "Tantangan Khusus Perumahan Rakyat",
      issues: [
        "Lahan terbatas untuk sistem pengolahan air limbah individual",
        "Kepadatan penduduk yang tinggi di kawasan perumahan murah",
        "Ketidakmampuan finansial untuk membangun infrastruktur sanitasi yang layak",
        "Kurangnya edukasi tentang pentingnya air bersih dan sanitasi"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#DDDAD0] to-[#E8E6DF]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#3C3D37] mb-4">
            SDGs di Indonesia
          </h2>
          <p className="text-xl text-[#697465]">
            Tantangan dan peluang mencapai Sustainable Development Goals untuk Indonesia yang lebih baik
          </p>
        </div>

        {/* 5 Facts Section */}
        <div className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {facts.map((fact, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 text-center border-t-4 border-[#8FA66D]"
              >
                <div className="text-4xl font-bold text-[#8FA66D] mb-2">
                  {fact.number}
                </div>
                <h4 className="text-xl font-semibold text-[#3C3D37] mb-2">
                  {fact.title}
                </h4>
                <p className="text-[#697465] text-sm">
                  {fact.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* SDG 6 Focus Section */}
        <div className="bg-[#697465] rounded-lg overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {/* Left side - Image */}
            <div className="h-96 md:h-full min-h-96 bg-[#3C3D37] flex items-center justify-center">
              <div className="text-center text-white p-8">
                <div className="text-7xl font-bold mb-4">SDG 6</div>
                <h3 className="text-3xl font-bold">
                  Clean Water and Sanitation
                </h3>
                <p className="text-[#C3CC9B] mt-4">
                  Air Bersih dan Sanitasi Layak
                </p>
              </div>
            </div>

            {/* Right side - Content */}
            <div className="p-8 md:p-12 text-white">
              <h4 className="text-2xl font-bold mb-6">
                Fokus Isu di Perumahan dan Perkampungan Indonesia
              </h4>
              
              <div className="space-y-8">
                {sdg6Issues.map((section, index) => (
                  <div key={index}>
                    <h5 className="text-lg font-semibold mb-4 text-[#C3CC9B]">
                      {section.title}
                    </h5>
                    <ul className="space-y-3">
                      {section.issues.map((issue, issueIndex) => (
                        <li key={issueIndex} className="flex gap-3">
                          <span className="text-[#8FA66D] mt-1">•</span>
                          <span className="text-[#DDDAD0] text-sm leading-relaxed">
                            {issue}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
