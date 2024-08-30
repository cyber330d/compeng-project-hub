import Team from "./Team"
export default function Story() {
  return (
    <section
      id="story"
      className="p-6 px-6 py-12 min-h-[80vh] flex items items-center justify-center"
    >
      <div className="container mx-auto ">
        <h2 className="text-3xl font-bold mb-6 text-primary text-center w-full pb-8">
          Story
        </h2>
        <div className="flex items-start justify-center gap-8 pb-8">
          {/* <div className="grid md:grid-cols-3 gap-8 pb-8"> */}
          <p className="mb-4 max-w-80">
            CompEng Project Hub was created by group of final year Computer
            Engineering students as part of their Web Programming course
            assessment. The platform was born from their shared experiences and
            challenges encountered throughout their academic project journey.
          </p>
          <p className="mb-4 max-w-80">
            We aim to transform project work into a collaborative and impactful
            experience, that can be impoved further collaboritively and an
            ecosystem where students can connect with mentors, sponsors, and
            industry professionals, transforming their projects into
            opportunities for growth,innovation, and career advancement.
          </p>
          <p className="mb-4 max-w-80">
            Our team is composed of students, united by a common goal of
            improving the educational experience for their peers.
          </p>
        </div>
        <Team />
      </div>
    </section>
  );
}
