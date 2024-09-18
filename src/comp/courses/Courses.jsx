import { CourseItem } from "./CourseItem";
import "./scss/courses.scss";
import { useSelector } from "react-redux";
export const Courses = () => {
  const { courses } = useSelector((store) => store.coursesSlice);

  console.log(courses);
  return (
    <section className="courses__container">
      <ul className="courses__list">
        {courses.map(({ id, imgURL, price, discount, active  , description, title}, index) => {
          return (
            <CourseItem
              key={id}  
              imgURL={imgURL}
              price={price}
              description={description}
              discount={discount}
              active={active}
              id={id}
              title={title}
              
            />
          );
        })}
      </ul>
    </section>
  );
};
//Course info
// {
//   id: 'onKpm3aty1gBf5Cbv9AE',
//   imgURL:
//     'https://firebasestorage.googleapis.com/v0/b/marquesita-academy.appspot.com/o/courses%2FphotoCourses%2Fmeme.jpeg?alt=media&token=10acb0ae-fe2a-4f3c-a435-2ed7eebe9ef9',
//   createdAt: '26/05/2024 04:50',
//   price: 0,
//   description: 'prueba descripcion',
//   discount: null,
//   title: 'curso prueba',
//   active: false,
//   modules: [
//     {
//       description: 'nuevo',
//       videos: Array(10) [
//         {
//           description: 'algo',
//           id: 'c816951b-b937-44bd-a65d-5a71ceccb7b3',
//           title: 'video.webm',
//           URLVideo:
//             'https://firebasestorage.googleapis.com/v0/b/marquesita-academy.appspot.com/o/courses%2Fcurso_prueba%2Fmodulo_5%2Fvideo.webm?alt=media&token=a3b97e49-8ac7-4f57-a44c-6ab96cf7a995'
//         },
//         {
//           description: 'algo',
//           id: 'b96e46a8-dd07-4b94-8da2-3e7a97b387ed',
//           title: 'video2.webm',
//           URLVideo:
//             'https://firebasestorage.googleapis.com/v0/b/marquesita-academy.appspot.com/o/courses%2Fcurso_prueba%2Fmodulo_5%2Fvideo2.webm?alt=media&token=dbf7b7b2-f823-48a0-8d5d-3b84a5602e71'
//         },
//         {
//           description: 'algo',
//           id: 'ce4ec304-540e-4f76-9d17-5c6bd90c5d59',
//           title: 'onefeel.webm',
//           URLVideo:
//             'https://firebasestorage.googleapis.com/v0/b/marquesita-academy.appspot.com/o/courses%2Fcurso_prueba%2Fmodulo_5%2Fonefeel.webm?alt=media&token=a8caeb61-c4bf-4d7e-8dfa-bd653264901f'
//         },
//         {
//           description: 'algo',
//           id: 'c7f28a54-0e87-4925-afa4-b365150107c4',
//           title: 'en.webm',
//           URLVideo:
//             'https://firebasestorage.googleapis.com/v0/b/marquesita-academy.appspot.com/o/courses%2Fcurso_prueba%2Fmodulo_5%2Fen.webm?alt=media&token=aaf94f59-5685-4b51-865a-b93faaa37461'
//         },
//         {
//           description: 'algo',
//           id: '0047e30c-970e-4cb6-87fc-d9d481100245',
//           title: 'algo.webm',
//           URLVideo:
//             'https://firebasestorage.googleapis.com/v0/b/marquesita-academy.appspot.com/o/courses%2Fcurso_prueba%2Fmodulo_5%2Falgo.webm?alt=media&token=93f1f277-7103-4c3a-affb-9ba3611f06e1'
//         },
//         {
//           description: 'algo',
//           id: 'b4c490d0-bc74-4504-aa2f-002ccd342fd6',
//           title: 'foto.jpeg',
//           URLVideo:
//             'https://firebasestorage.googleapis.com/v0/b/marquesita-academy.appspot.com/o/courses%2Fcurso_prueba%2Fmodulo_5%2Ffoto.jpeg?alt=media&token=0f720c5b-cfb9-4026-bcb0-3967c113ecca'
//         },
//         {
//           description: 'algo',
//           id: '4116e458-cf1c-48b6-946b-e94cbb3b3d0c',
//           title: 'grabacion prueba.webm',
//           URLVideo:
//             'https://firebasestorage.googleapis.com/v0/b/marquesita-academy.appspot.com/o/courses%2Fcurso_prueba%2Fmodulo_5%2Fgrabacion%20prueba.webm?alt=media&token=27eee35c-23b4-4bb8-aadd-5bec14301c81'
//         },
//         {
//           description: 'algo',
//           id: '85594f71-7f55-4184-8550-7c9cbb70ea8c',
//           title: 'asd.webm',
//           URLVideo:
//             'https://firebasestorage.googleapis.com/v0/b/marquesita-academy.appspot.com/o/courses%2Fcurso_prueba%2Fmodulo_5%2Fasd.webm?alt=media&token=f2a28181-8cd2-4bd3-9625-22729686a6ab'
//         },
//         {
//           description: 'algo',
//           id: '02799ff9-7b82-4c76-8aca-a667f8da1c10',
//           title: 'algo.webm',
//           URLVideo:
//             'https://firebasestorage.googleapis.com/v0/b/marquesita-academy.appspot.com/o/courses%2Fcurso_prueba%2Fmodulo_5%2Falgo.webm?alt=media&token=9f97c986-dc54-4670-9a0b-69d3eb1c04c1'
//         },
//         {
//           description: 'algo',
//           id: '20219303-2b79-41ae-9478-197f0e543082',
//           title: 'asd.jpeg',
//           URLVideo:
//             'https://firebasestorage.googleapis.com/v0/b/marquesita-academy.appspot.com/o/courses%2Fcurso_prueba%2Fmodulo_5%2Fasd.jpeg?alt=media&token=6f16caec-1646-43cd-82ab-06c403ea6698'
//         }
//       ],
//       id: 'dea3c592-ded0-4f0a-8757-1b0f69f2dd05',
//       title: 'Modulo 5'
//     }

// const cursos =[
//   {
//     "title": "Técnica Clásica",
//     "temarios": [
//       "Introducción a la técnica",
//       "Anatomía del ojo",
//       "Tricología de la pestaña",
//       "Ciclo de vida",
//       "Grosor, curvas, longitudes",
//       "Distancia de colocación",
//       "Finalización NG",
//       "Diseños para cada tipos de ojos",
//       "Técnicas de aislamiento",
//       "Técnicas para adhesivo",
//       "Materiales de calidad, ficha de consentimiento",
//       "Preparación de la pestaña natural",
//       "Técnica de colocación",
//       "Service",
//       "Adhesivos",
//       "Remoción",
//       "Seguridad e higiene",
//       "Cuidados pre y post colocación",
//       "Patologías, enfermedades, contraindicaciones"
//     ]
//   },
//   {
//     "title": "Técnica Clásica Avanzada",
//     "temarios": [
//       "Direccionamiento",
//       "Trabajo en capas y filas",
//       "Mapping",
//       "Tapping",
//       "Deeping",
//       "Curvas modernas",
//       "Retención",
//       "Peso y fibras correctas",
//       "Adhesivos: stiky, retención, posibles problemas"
//     ]
//   }
// ]
