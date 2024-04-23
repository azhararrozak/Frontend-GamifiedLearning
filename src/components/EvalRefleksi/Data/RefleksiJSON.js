const RefleksiJSON = {
  completedHtml: "Terima Kasih telah mengisi form ini.",
  title: "Form Refleksi",
  description:
    "Terima kasih telah menyempatkan waktunya mengisi form ini, Data ini akan berguna bagi saya untuk meningkatkan proses pembelajaran lebih baik lagi.",
  pages: [
    {
      name: "page1",
      elements: [
        {
          type: "comment",
          name: "pertanyaan1",
          title: "Apa yang menyenangkan dalam pembelajaran hari ini?",
          isRequired: true,
          maxLength: 500,
        },
        {
          type: "comment",
          name: "pertanyaan2",
          title: "Apakah proses pembelajaran hari ini bermakna bagi saya?",
          isRequired: true,
          maxLength: 500,
        },
        {
          type: "radiogroup",
          name: "pertanyaan3",
          title: "Saya dapat menguasai materi yang telah di ajarkan",
          choices: ["Baik", "Cukup", "Kurang"],
        },
        {
          type: "radiogroup",
          name: "pertanyaan4",
          title: "Saya terlibat aktif dalam proses pembelajaran hari ini?",
          choices: ["Ya", "Tidak"],
        },
        {
          type: "radiogroup",
          name: "pertanyaan5",
          title: "Saya menyumbangkan ide dalam proses diskusi?",
          choices: ["Ya", "Tidak"],
        },
        {
          type: "radiogroup",
          name: "pertanyaan6",
          title: "Saya dapat bekerja sama dengan teman satu kelompok?",
          choices: ["Ya", "Tidak"],
        },
      ],
    },
  ],
  showQuestionNumbers: "off",
};

export default RefleksiJSON;
