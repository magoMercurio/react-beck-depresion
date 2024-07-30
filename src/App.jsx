
const questions = [
  {
    id: 1,
    q: "tristeza",
    respuestas: [
      "No me siento triste.", 
      "Me siento triste gran parte del tiempo", 
      "Me siento triste todo el tiempo", 
      "Me siento tan triste o soy tan infeliz que no puedo soportarlo"
    ],
    cantidad: [0, 1, 2, 3]
  },
  {
    id: 2,
    q: "pesimismo",
    respuestas: [
      "No estoy desalentado respecto del mi futuro.",
      "Me siento más desalentado respecto de mi futuro que lo que solía estarlo.",
      "No espero que las cosas funcionen para mi.",
      "Siento que no hay esperanza para mi futuro y que sólo puede empeorar."
    ],
    cantidad: [0, 1, 2, 3]
  },
  {
    id: 3,
    q: "fracaso",
    respuestas: [
      "No me siento como un fracasado.",
      "He fracasado más de lo que hubiera debido.",
      "Cuando miro hacia atrás, veo muchos fracasos.",
      "Siento que como persona soy un fracaso total."
    ],
    cantidad: [0, 1, 2, 3]
  },
  {
    id: 4,
    q: "perdida de placer",
    respuestas: [
      "Obtengo tanto placer como siempre por las cosas de las que disfruto",
      "No disfruto tanto de las cosas como solía hacerlo.",
      "Obtengo muy poco placer de las cosas que solía disfrutar..",
      "No puedo obtener ningún placer de las cosas de las que solía disfrutar."
    ],
    cantidad: [0, 1, 2, 3]
  },
  {
    id: 5,
    q: "sentimiento de culpa",
    respuestas: [
      "No me siento particularmente culpable.",
      "Me siento culpable respecto de varias cosas que he hecho o que debería haber hecho.",
      "Me siento bastante culpable la mayor parte del tiempo.",
      "Me siento culpable todo el tiempo.",
    ],
    cantidad: [0, 1, 2, 3]
  },
  {
    id: 6,
    q: "sentimientos de castigo",
    respuestas: [
      "No siento que este siendo castigado",
      "Siento que tal vez pueda ser castigado.",
      "Espero ser castigado.",
      "Siento que estoy siendo castigado.",
    ],
    cantidad: [0, 1, 2, 3]
  },
  {
    id: 7,
    q: "disconformidad con uno mismo",
    respuestas: [
      "Siento acerca de mi lo mismo que siempre.",
      "He perdido la confianza en mí mismo.",
      "Estoy decepcionado conmigo mismo.",
      "No me gusto a mí mismo.",
    ],
    cantidad: [0, 1, 2, 3]
  },
  {
    id: 8,
    q: "autocritica",
    respuestas: [
      "No me critico ni me culpo más de lo habitual.",
      "Estoy más crítico conmigo mismo de lo que solía estarlo.",
      "Me critico a mí mismo por todos mis errores.",
      "Me culpo a mí mismo por todo lo malo que sucede.",
    ],
    cantidad: [0, 1, 2, 3]
  },
  {
    id: 9,
    q: "pensamientos o deseos suicidas",
    respuestas: [
      "No tengo ningún pensamiento de matarme.",
      "He tenido pensamientos de matarme, pero no lo haría.",
      "Querría matarme.",
      "Me mataría si tuviera la oportunidad de hacerlo.",
    ],
    cantidad: [0, 1, 2, 3]
  },
  {
    id: 10,
    q: "llanto",
    respuestas: [
      "No lloro más de lo que solía hacerlo.",
      "Lloro más de lo que solía hacerlo.",
      "Lloro por cualquier pequeñez.",
      "Siento ganas de llorar pero no puedo.",
    ],
    cantidad: [0, 1, 2, 3]
  },
  {
    id: 11,
    q: "agitacion",
    respuestas: [
      "No estoy más inquieto o tenso que lo habitual.",
      "Me siento más inquieto o tenso que lo habitual.",
      "Estoy tan inquieto o agitado que me es difícil quedarme quieto.",
      "Estoy tan inquieto o agitado que tengo que estar siempre en movimiento o haciendo algo.",
    ],
    cantidad: [0, 1, 2, 3]
  },
  {
    id: 12,
    q: "pérdida de interés",
    respuestas: [
      "No he perdido el interés en otras actividades o personas.",
      "Estoy menos interesado que antes en otras personas o cosas.",
      "He perdido casi todo el interés en otras personas o cosas.",
      "Me es difícil interesarme por algo."
    ],
    cantidad: [0, 1, 2, 3]
  },
  {
    id: 13,
    q: "indesición",
    respuestas: [
      "Tomo mis propias decisiones tan bien como siempre.",
      "Me resulta más difícil que de costumbre tomar decisiones.",
      "Encuentro mucha más dificultad que antes para tomar decisiones.",
      "Tengo problemas para tomar cualquier decisión."
    ],
    cantidad: [0, 1, 2, 3]
  },
  {
    id: 14,
    q: "desvalorización",
    respuestas: [
      "No siento que yo no sea valioso.",
      "No me considero a mi mismo tan valioso y útil como solía considerarme",
      "Me siento menos valioso cuando me comparo con otros.",
      "Siento que no valgo nada."
    ],
    cantidad: [0, 1, 2, 3]
  },
  {
    id: 15,
    q: "pérdida de energia",
    respuestas: [
      "Tengo tanta energía como siempre.",
      "Tengo menos energía que la que solía tener.",
      "No tengo suficiente energía para hacer demasiado",
      "No tengo energía suficiente para hacer nada."
    ],
    cantidad: [0, 1, 2, 3]
  },
  {
    id: 16,
    q: "cambios en los habitos de sueño",
    respuestas: [
      "No he experimentado ningún cambio en mis hábitos de sueño.",
      "Duermo un poco más o menos de lo habitual.",
      "Duermo mucho más o menos de lo habitual.",
      "Duermo la mayor parte del día o Me despierto 1-2 horas más temprano y no puedo volver a dormirme"
    ],
    cantidad: [0, 1, 2, 3]
  },
  {
    id: 17,
    q: "irritabilidad",
    respuestas: [
      "No estoy tan irritable que lo habitual.",
      "Estoy más irritable que lo habitual.",
      "Estoy mucho más irritable que lo habitual.",
      "Estoy irritable todo el tiempo."
    ],
    cantidad: [0, 1, 2, 3]
  },
  {
    id: 18,
    q: "cambios en el apetito",
    respuestas: [
      "No he experimentado ningún cambio en mi apetito.",
      "Mi apetito es un poco menor o mayor de lo habitual.",
      "Mi apetito es mucho menor o mayor que antes.",
      "No tengo apetito en absoluto o quiero comer todo el dia"
    ],
    cantidad: [0, 1, 2, 3]
  },
  {
    id: 19,
    q: "dificultad de concentracion",
    respuestas: [
      "Puedo concentrarme tan bien como siempre.",
      "No puedo concentrarme tan bien como habitualmente",
      "Me es difícil mantener la mente en algo por mucho tiempo.",
      "Encuentro que no puedo concentrarme en nada."
    ],
    cantidad: [0, 1, 2, 3]
  },
  {
    id: 20,
    q: "cansancio o fatiga",
    respuestas: [
      "No estoy más cansado o fatigado que lo habitual.",
      "Me fatigo o me canso más fácilmente que lo habitual.",
      "stoy demasiado fatigado o cansado para hacer muchas de las cosas que solía hacer",
      "Estoy demasiado fatigado o cansado para hacer la mayoría de las cosas que solía hacer"
    ],
    cantidad: [0, 1, 2, 3]
  },
  {
    id: 21,
    q: "pérdida de interés en el sexo",
    respuestas: [
      "No he notado ningún cambio reciente en mi interés por el sexo",
      "Estoy menos interesado en el sexo de lo que solía estarlo.",
      "Estoy mucho menos interesado en el sexo.",
      "He perdido completamente el interés en el sexo."
    ],
    cantidad: [0, 1, 2, 3]
  }
]

function App() {

  return (
    <>
      <h1 className="flex justify-center items-center capitalize">Test de depresion de beck</h1>
    </>
  )
}

export default App
