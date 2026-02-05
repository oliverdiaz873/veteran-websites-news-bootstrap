/**********************
 * BASE DE DATOS DE NOTICIAS
 **********************/
const noticias = [
    // --- CLIMA ---
    {
        id: "huracan_atlantico",
        titulo: "Huracán se fortalece en el Atlántico y genera alertas en la costa este de EE.UU.",
        url: "../news/clima/noticia-sobre-huracan.html",
        categoria: "Clima",
        fecha: "11 de octubre de 2025",
        resumen: "El fenómeno meteorológico continúa intensificándose y obliga a emitir alertas preventivas en varias zonas costeras.",
        imagen: "../../assets/images/news/clima/ciclon.jpg"
    },
    {
        id: "tormenta_caribe",
        titulo: "Tormenta tropical se aproxima al Caribe",
        url: "../news/clima/noticia-de-la-tormenta.html",
        categoria: "Clima",
        fecha: "4 de octubre de 2025",
        resumen: "Una nueva tormenta tropical amenaza con tocar tierra en las próximas 48 horas, poniendo en alerta a las autoridades locales.",
        imagen: "../../assets/images/news/clima/tormenta.jpg"
    },
    {
        id: "ola_calor_europa",
        titulo: "Ola de calor sin precedentes en Europa",
        url: "../news/clima/noticia-del-calor.html",
        categoria: "Clima",
        fecha: "4 de octubre de 2025",
        resumen: "Temperaturas extremas afectan a gran parte del continente, rompiendo récords históricos y alertando sobre el cambio climático.",
        imagen: "../../assets/images/news/clima/calor.jpg"
    },
    {
        id: "tornado_medio_oeste",
        titulo: "Tornado causa devastación en el medio oeste de EE.UU.",
        url: "../news/clima/noticia-del-tornado.html",
        categoria: "Clima",
        fecha: "4 de octubre de 2025",
        resumen: "Un potente tornado arrasó con varias localidades, dejando cuantiosos daños materiales y miles de personas sin hogar.",
        imagen: "../../assets/images/news/clima/tornado.jpg"
    },
    {
        id: "inundaciones_sur",
        titulo: "Inundaciones severas afectan al sur del continente",
        url: "../news/clima/noticia-sobre-inundaciones.html",
        categoria: "Clima",
        fecha: "4 de octubre de 2025",
        resumen: "Lluvias torrenciales han provocado el desbordamiento de ríos, afectando a miles de familias y destruyendo infraestructuras críticas.",
        imagen: "../../assets/images/news/clima/inundacion.jpg"
    },
    {
        id: "nevadas_norte",
        titulo: "Nevadas intensas cubren el norte de Europa",
        url: "../news/clima/noticia-sobre-nevadas.html",
        categoria: "Clima",
        fecha: "4 de octubre de 2025",
        resumen: "El temporal de nieve ha bloqueado carreteras y aeropuertos, afectando la movilidad en varios países del norte del continente.",
        imagen: "../../assets/images/news/clima/winter.jpg"
    },

    // --- DEPORTE ---
    {
        id: "lakers_celtics",
        titulo: "Lakers vencen a los Celtics en un final emocionante",
        url: "../news/deporte/noticia-de-NBA.html",
        categoria: "Deporte",
        fecha: "4 de octubre de 2025",
        resumen: "En una nueva edición del clásico de la NBA, el equipo de Los Ángeles logró imponerse en los últimos segundos del encuentro.",
        imagen: "../../assets/images/news/deporte/NBA.jpg"
    },
    {
        id: "olimpiadas_apertura",
        titulo: "Atletas de todo el mundo se reúnen para la ceremonia de apertura",
        url: "../news/deporte/noticia-de-atletas.html",
        categoria: "Deporte",
        fecha: "4 de octubre de 2025",
        resumen: "Con un desfile lleno de color y emoción, se dieron por inaugurados los Juegos Olímpicos con la participación de miles de deportistas.",
        imagen: "../../assets/images/news/deporte/atletismo.jpg"
    },
    {
        id: "mets_braves",
        titulo: "Mets derrotan a los Braves en un duelo de pitcheo",
        url: "../news/deporte/noticia-de-baseball.html",
        categoria: "Deporte",
        fecha: "4 de octubre de 2025",
        resumen: "En un partido dominado por los lanzadores, el equipo de Nueva York consiguió una victoria ajustada en las Grandes Ligas.",
        imagen: "../../assets/images/news/deporte/baseball.jpg"
    },
    {
        id: "record_natacion",
        titulo: "Natación: El equipo de EE.UU. rompe récord en relevos",
        url: "../news/deporte/noticia-de-natacion.html",
        categoria: "Deporte",
        fecha: "4 de octubre de 2025",
        resumen: "Con una actuación histórica, el cuarteto estadounidense estableció una nueva marca mundial en los 4x100 metros estilos.",
        imagen: "../../assets/images/news/deporte/natacion.jpg"
    },
    {
        id: "victoria_equipo_local",
        titulo: "Gran victoria del equipo local",
        url: "../news/deporte/noticia-del-equipo-local.html",
        categoria: "Deporte",
        fecha: "4 de octubre de 2025",
        resumen: "El equipo local consiguió una importante victoria que lo acerca a la clasificación tras un intenso partido.",
        imagen: "../../assets/images/news/deporte/futbol.jpg"
    },
    {
        id: "espana_final",
        titulo: "España clasifica a la final tras vencer a Alemania",
        url: "../news/deporte/noticia-spain-vs-germany.html",
        categoria: "Deporte",
        fecha: "4 de octubre de 2025",
        resumen: "En un partido lleno de tensión, la selección española logró su pase a la gran final del campeonato internacional.",
        imagen: "../../assets/images/news/deporte/spain-germany.jpg"
    },

    // --- ECONOMÍA ---
    {
        id: "inflacion_mercados",
        titulo: "Incremento de la inflación impacta a los mercados",
        url: "../news/economia/noticia-de-la-inflacion.html",
        categoria: "Economía",
        fecha: "4 de octubre de 2025",
        resumen: "El aumento sostenido de la inflación genera incertidumbre en los mercados financieros y afecta el poder adquisitivo de los ciudadanos.",
        imagen: "../../assets/images/news/economia/inflacion.jpg"
    },
    {
        id: "bolsa_valores_alza",
        titulo: "La bolsa de valores cierra en alza tras jornada de optimismo inversor",
        url: "../news/economia/noticia-de-la-bolsa.html",
        categoria: "Economía",
        fecha: "4 de octubre de 2025",
        resumen: "Los mercados cerraron la jornada con ganancias impulsadas por el optimismo de los inversores.",
        imagen: "../../assets/images/news/economia/bolsa-de-valores.avif"
    },
    {
        id: "dolar_fortalece",
        titulo: "El dólar se fortalece ante incertidumbre económica global",
        url: "../news/economia/noticia-del-dolar.html",
        categoria: "Economía",
        fecha: "4 de octubre de 2025",
        resumen: "El dólar estadounidense se fortaleció frente a las principales divisas, impulsado por la incertidumbre económica global.",
        imagen: "../../assets/images/news/economia/dolar.avif"
    },
    {
        id: "euro_fortalece",
        titulo: "El euro se fortalece frente al dólar",
        url: "../news/economia/noticia-del-euro.html",
        categoria: "Economía",
        fecha: "4 de octubre de 2025",
        resumen: "La moneda europea registró un incremento significativo, impulsada por las expectativas de crecimiento en la eurozona.",
        imagen: "../../assets/images/news/economia/euro.jpg"
    },
    {
        id: "precio_petroleo",
        titulo: "Precio del petróleo alcanza niveles máximos en el año",
        url: "../news/economia/noticia-del-petroleo.html",
        categoria: "Economía",
        fecha: "4 de octubre de 2025",
        resumen: "Debido a tensiones geopolíticas, el costo del crudo ha subido, afectando los precios de los combustibles globalmente.",
        imagen: "../../assets/images/news/economia/petroleo.avif"
    },
    {
        id: "crecimiento_pib",
        titulo: "El PIB crece por encima de las expectativas en el trimestre",
        url: "../news/economia/noticia-del-pib.html",
        categoria: "Economía",
        fecha: "4 de octubre de 2025",
        resumen: "La economía nacional mostró un desempeño sólido, superando las proyecciones de los analistas financieros.",
        imagen: "../../assets/images/news/economia/pib.jpg"
    },

    // --- INTERNACIONAL ---
    {
        id: "china_usa_diplomacia",
        titulo: "China y EE.UU. inician conversaciones diplomáticas en Beijing",
        url: "../news/internacional/noticia-de-china-y-usa.html",
        categoria: "Internacional",
        fecha: "4 de octubre de 2025",
        resumen: "Ambas potencias buscan reducir tensiones y alcanzar acuerdos en temas comerciales y de seguridad global.",
        imagen: "../../assets/images/news/internacional/china.jpg"
    },
    {
        id: "guerra_ucrania_fin",
        titulo: "La guerra de Ucrania llega a su fin",
        url: "../news/internacional/noticia-de-guerra.html",
        categoria: "Internacional",
        fecha: "4 de octubre de 2025",
        resumen: "Tras meses de negociaciones diplomáticas, el conflicto llega a su fin generando expectativas de estabilidad.",
        imagen: "../../assets/images/news/internacional/guerra.jpg"
    },
    {
        id: "tension_israel_iran",
        titulo: "Tensiones aumentan en Medio Oriente tras recientes eventos",
        url: "../news/internacional/noticia-de-israel-e-iran.html",
        categoria: "Internacional",
        fecha: "4 de octubre de 2025",
        resumen: "La situación diplomática entre ambos países se ha vuelto crítica, generando preocupación en la comunidad internacional.",
        imagen: "../../assets/images/news/internacional/israel_and_iran.jpg"
    },
    {
        id: "otan_refuerzo",
        titulo: "OTAN refuerza su presencia en Europa del Este",
        url: "../news/internacional/noticia-de-la-otan.html",
        categoria: "Internacional",
        fecha: "4 de octubre de 2025",
        resumen: "Con el objetivo de garantizar la seguridad, la alianza militar ha decidido incrementar el número de tropas en la región.",
        imagen: "../../assets/images/news/internacional/nato.jpg"
    },
    {
        id: "ue_energia_renovable",
        titulo: "Unión Europea busca acuerdos sobre energía renovable",
        url: "../news/internacional/noticia-de-la-union-europea.html",
        categoria: "Internacional",
        fecha: "4 de octubre de 2025",
        resumen: "Los estados miembros debaten nuevas metas para acelerar la transición energética y reducir la dependencia del gas.",
        imagen: "../../assets/images/news/internacional/europa.jpg"
    },
    {
        id: "accidente_alemania",
        titulo: "Grave accidente en autopista de Alemania deja varios heridos",
        url: "../news/internacional/noticia-del-accidente.html",
        categoria: "Internacional",
        fecha: "4 de octubre de 2025",
        resumen: "Una colisión múltiple provocada por las condiciones climáticas ha generado caos en una de las vías principales del país.",
        imagen: "../../assets/images/news/internacional/accidente.avif"
    },

    // --- JUSTICIA ---
    {
        id: "investigacion_homicidio",
        titulo: "Investigan homicidio en el centro de la ciudad",
        url: "../news/justicia/noticia-del-homicidio.html",
        categoria: "Justicia",
        fecha: "11 de octubre de 2025",
        resumen: "Las autoridades iniciaron una investigación para esclarecer las circunstancias del crimen ocurrido en una zona concurrida.",
        imagen: "../../assets/images/news/justicia/homicidio.jpg"
    },
    {
        id: "detencion_fraude",
        titulo: "Detienen a exfuncionario acusado de fraude financiero millonario",
        url: "../news/justicia/noticia-del-fraude.html",
        categoria: "Justicia",
        fecha: "11 de octubre de 2025",
        resumen: "El exfuncionario fue arrestado tras ser vinculado a un esquema de fraude que habría causado pérdidas millonarias.",
        imagen: "../../assets/images/news/justicia/arrested.jpg"
    },
    {
        id: "sentencia_corrupcion",
        titulo: "Tribunal Supremo ratifica sentencia en caso de corrupción",
        url: "../news/justicia/noticia-del-tribunal.html",
        categoria: "Justicia",
        fecha: "11 de octubre de 2025",
        resumen: "La máxima instancia judicial confirmó las penas para los implicados en un desfalco de fondos públicos.",
        imagen: "../../assets/images/news/justicia/tribunal.jpg"
    },
    {
        id: "condena_cadena_perpetua",
        titulo: "Líder de banda internacional es condenado a cadena perpetua",
        url: "../news/justicia/noticia-del-criminal.html",
        categoria: "Justicia",
        fecha: "11 de octubre de 2025",
        resumen: "Tras un largo juicio, la justicia dictó la pena máxima para el cabecilla de una organización dedicada al tráfico ilícito.",
        imagen: "../../assets/images/news/justicia/condena.jpg"
    },
    {
        id: "demanda_evasion_impuestos",
        titulo: "Fiscalía demanda a empresa por evasión de impuestos",
        url: "../news/justicia/noticia-sobre-empresa.html",
        categoria: "Justicia",
        fecha: "11 de octubre de 2025",
        resumen: "La compañía se enfrenta a cargos legales por no reportar ingresos multimillonarios durante los últimos ejercicios fiscales.",
        imagen: "../../assets/images/news/justicia/juicio.jpg"
    },
    {
        id: "prision_preventiva_homicidio",
        titulo: "Juez dicta prisión preventiva para sospechoso de homicidio múltiple",
        url: "../news/justicia/noticia-sobre-homicidio-multiple.html",
        categoria: "Justicia",
        fecha: "11 de octubre de 2025",
        resumen: "Debido a la gravedad del caso y el riesgo de fuga, el juzgado determinó que el acusado espere el juicio en reclusión.",
        imagen: "../../assets/images/news/justicia/juez.jpg"
    },

    // --- POLÍTICA ---
    {
        id: "popularidad_presidente",
        titulo: "Encuestas Revelan Incremento en la Popularidad del Presidente",
        url: "../news/politica/noticia-de-encuesta.html",
        categoria: "Política",
        fecha: "4 de octubre de 2025",
        resumen: "Los últimos sondeos muestran un respaldo creciente a la gestión gubernamental, impulsado por nuevas iniciativas económicas.",
        imagen: "../../assets/images/news/politica/presidente.avif"
    },
    {
        id: "cumbre_casa_blanca",
        titulo: "Casa Blanca Confirma Cumbre Internacional para Esta Semana",
        url: "../news/politica/noticia-de-la-casa-blanca.html",
        categoria: "Política",
        fecha: "4 de octubre de 2025",
        resumen: "El encuentro reunirá a líderes globales para discutir temas de seguridad, salud y cooperación económica estratégica.",
        imagen: "../../assets/images/news/politica/casa_blanca.jpg"
    },
    {
        id: "ley_ambiental_aprobacion",
        titulo: "Aprobación Histórica: El Congreso Da Luz Verde a la Ley de Protección Ambiental",
        url: "../news/politica/noticia-de-ley-ambiental.html",
        categoria: "Política",
        fecha: "4 de octubre de 2025",
        resumen: "La nueva normativa establece marcos estrictos para la conservación de recursos y la mitigación del impacto climático industrial.",
        imagen: "../../assets/images/news/politica/congreso.avif"
    },
    {
        id: "debate_presidencial",
        titulo: "Debate Presidencial: Candidatos Confrontan sus Propuestas Frente al País",
        url: "../news/politica/noticia-del-debate.html",
        categoria: "Política",
        fecha: "4 de octubre de 2025",
        resumen: "En un encuentro televisado, los aspirantes discutieron sus visiones sobre economía, seguridad y desarrollo social para la nación.",
        imagen: "../../assets/images/news/politica/debate.jpg"
    },
    {
        id: "reforma_constitucional_senado",
        titulo: "El Senado Debate Nueva Propuesta de Reforma Constitucional",
        url: "../news/politica/noticia-del-senado.html",
        categoria: "Política",
        fecha: "4 de octubre de 2025",
        resumen: "La iniciativa busca modernizar la estructura del Estado y fortalecer los derechos fundamentales de los ciudadanos.",
        imagen: "../../assets/images/news/politica/senado.avif"
    },
    {
        id: "protestas_corrupcion",
        titulo: "Protestas por corrupción",
        url: "../news/politica/noticia-de-protestas.html",
        categoria: "Política",
        fecha: "4 de octubre de 2025",
        resumen: "Thousands of citizens demonstrated in various cities demanding transparency and sanctions.",
        imagen: "../../assets/images/news/politica/protestas.jpg"
    },

    // --- SALUD ---
    {
        id: "resistencia_antibioticos",
        titulo: "Aumenta la preocupación por la resistencia a los antibióticos a nivel mundial",
        url: "../news/salud/noticia-de-antibioticos.html",
        categoria: "Salud",
        fecha: "9 de octubre de 2025",
        resumen: "Expertos alertan que el uso inadecuado de medicamentos está generando bacterias más resistentes y difíciles de tratar.",
        imagen: "../../assets/images/news/salud/antibioticos.avif"
    },
    {
        id: "contaminacion_aire_salud",
        titulo: "La contaminación del aire aumenta el riesgo de enfermedades respiratorias",
        url: "../news/salud/noticia-de-contaminacion.html",
        categoria: "Salud",
        fecha: "9 de octubre de 2025",
        resumen: "Nuevos estudios vinculan la mala calidad del aire en zonas urbanas con el incremento de casos de asma y afecciones pulmonares.",
        imagen: "../../assets/images/news/salud/contaminacion.avif"
    },
    {
        id: "terapia_cardiovascular",
        titulo: "Avances en medicina: nueva terapia promete mejorar la salud cardiovascular",
        url: "../news/salud/noticia-de-salud-cardiovascular.html",
        categoria: "Salud",
        fecha: "9 de octubre de 2025",
        resumen: "Un tratamiento innovador ha mostrado resultados prometedores en la reducción de la presión arterial y el fortalecimiento cardíaco.",
        imagen: "../../assets/images/news/salud/corazon.jpg"
    },
    {
        id: "prioridad_salud_mental",
        titulo: "La salud mental se convierte en prioridad ante el aumento de estrés y ansiedad",
        url: "../news/salud/noticia-de-salud-mental.html",
        categoria: "Salud",
        fecha: "9 de octubre de 2025",
        resumen: "Autoridades sanitarias promueven programas de bienestar emocional para mitigar el impacto del ritmo de vida actual.",
        imagen: "../../assets/images/news/salud/salud-mental.jpg"
    },
    {
        id: "descubrimiento_virus",
        titulo: "Descubren un nuevo virus que alerta a científicos",
        url: "../news/salud/noticia-del-virus.html",
        categoria: "Salud",
        fecha: "9 de octubre de 2025",
        resumen: "Investigadores internacionales analizan un nuevo virus que podría representar un riesgo para la salud pública global.",
        imagen: "../../assets/images/news/salud/virus.jpg"
    },
    {
        id: "exceso_azucar_metabolismo",
        titulo: "El consumo excesivo de azúcares aumenta el riesgo de enfermedades metabólicas",
        url: "../news/salud/noticia-sobre-azucar.html",
        categoria: "Salud",
        fecha: "9 de octubre de 2025",
        resumen: "Médicos advierten sobre la relación directa entre las dietas altas en azúcar y el desarrollo de diabetes y obesidad.",
        imagen: "../../assets/images/news/salud/azucar.jpg"
    }
];
