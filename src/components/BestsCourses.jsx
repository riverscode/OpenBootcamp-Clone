import CourseCard from "./CourseCard";

const BestsCourses = () => {
  return (
    <section className="mx-6 mt-16">
      <div className="flex justify-between">
        <p className="font-bold">Cursos mejor valorados</p>
        <p className="font-semibold text-gray-400 underline ">Ver todos</p>
      </div>
      <div className="flex gap-x-6 overflow-x-auto pb-6">
        <CourseCard
          level="Intermedio"
          image="reactjs"
          name="ReactJS"
          modules="29"
          hours="30"
        />

        <CourseCard
          level="Inicial"
          image="programing"
          name="Introducción a la programación"
          modules="11"
          hours="9"
        />

        <CourseCard
          level="Avanzado"
          image="reactjs-avandce"
          name="ReactJS Avanzado"
          modules="28"
          hours="30"
        />

        <CourseCard
          level="Inicial"
          image="java"
          name="Java Básico"
          modules="11"
          hours="15"
        />
      </div>
    </section>
  );
};
export default BestsCourses;
