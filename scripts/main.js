const traducoes = {
    pt: {
        logo: "&lt;/&gt; Clebson",
        menuHome: "HOME",
        menuProjetos: "PROJETOS",
        menuLink: "LINK",
        menuContato: "CONTATO",
        nome: "Clebson Santos",
        cargo: "Desenvolvedor Web",
        sobre: "Sobre",
        textoSobre: "Estudante de <strong>Sistemas de Informação</strong> no <strong>IFNMG - Campus Januária</strong>. Atualmente estudando desenvolvimento web com foco no front-end, mas disposto a aprender novas tecnologias.",
        educacao: "Educação",
        instituicao: "IFNMG - Campus Januária",
        curso1: "Curso Técnico em Informática integrado com Ensino Médio | 2018 - 2020",
        curso2: "Bacharelado em Sistemas de Informação | 2022 - 2026",
        idiomasTitulo: "Idiomas",
        idioma1: "Português Nativo",
        idioma2: "Inglês Intermediário",
        experienciasTitulo: "Experiências",
        exp1Titulo: "Técnico em Informática",
        exp1Local: "Autônomo | 2020 - 2022",
        exp1Texto1: "Após concluir o ensino médio junto ao curso de técnico em informática, comecei a trabalhar de maneira autônoma na minha área de formação.",
        exp1Texto2: "Realizei atividades como montagem, manutenção e formatação de computadores e celulares.",
        exp2Titulo: "Estágio/Prestação de Serviços",
        exp2Local: "Núcleo do Pequi | 2024 - 2025",
        exp2Texto1: "Prestação de serviços aproveitada como estágio remoto para a minha graduação.",
        exp2Texto2: "Realizei atualizações no front-end utilizando HTML, CSS e WordPress. Fiz upload de arquivos públicos, correção de bugs e criação de páginas responsivas etc.",
        exp2Texto3: "Participei de reuniões presenciais da empresa, discutindo mudanças atrativas para o website.",
        competenciasTitulo: "Competências",
        tecnologiasTitulo: "Tecnologias de Desenvolvimento",
        frontEndTitulo: "Front-End",
        backEndTitulo: "Back-End",
        rodape: "&copy; Clebson Santos 2025 | Todos os direitos reservados"
    },
    en: {
        logo: "&lt;/&gt; Clebson",
        menuHome: "HOME",
        menuProjetos: "PROJECTS",
        menuLink: "LINK",
        menuContato: "CONTACT",
        nome: "Clebson Santos",
        cargo: "Web Developer",
        sobre: "About",
        textoSobre: "Student of <strong>Information Systems</strong> at <strong>IFNMG - Campus Januária</strong>. Currently studying web development focused on front-end, but willing to learn new technologies.",
        educacao: "Education",
        instituicao: "IFNMG - Campus Januária",
        curso1: "Technical Course in Computer Science integrated with High School | 2018 - 2020",
        curso2: "Bachelor's in Information Systems | 2022 - 2026",
        idiomasTitulo: "Languages",
        idioma1: "Native Portuguese",
        idioma2: "Intermediate English",
        experienciasTitulo: "Experience",
        exp1Titulo: "IT Technician",
        exp1Local: "Freelancer | 2020 - 2022",
        exp1Texto1: "After finishing high school along with the IT technician course, I started working independently in my field.",
        exp1Texto2: "Performed activities such as assembly, maintenance, and formatting of computers and cell phones.",
        exp2Titulo: "Internship/Service Provision",
        exp2Local: "Núcleo do Pequi | 2024 - 2025",
        exp2Texto1: "Provided services that counted as a remote internship for my degree.",
        exp2Texto2: "Performed front-end updates using HTML, CSS, and WordPress. Uploaded public files, fixed bugs, and created responsive pages.",
        exp2Texto3: "Participated in company meetings, discussing attractive website changes.",
        competenciasTitulo: "Skills",
        tecnologiasTitulo: "Development Technologies",
        frontEndTitulo: "Front-End",
        backEndTitulo: "Back-End",
        rodape: "&copy; Clebson Santos 2025 | All rights reserved"
    },
    es: {
        logo: "&lt;/&gt; Clebson",
        menuHome: "INICIO",
        menuProjetos: "PROYECTOS",
        menuLink: "ENLACE",
        menuContato: "CONTACTO",
        nome: "Clebson Santos",
        cargo: "Desarrollador Web",
        sobre: "Sobre mí",
        textoSobre: "Estudiante de <strong>Sistemas de Información</strong> en el <strong>IFNMG - Campus Januária</strong>. Actualmente estudiando desarrollo web con enfoque en front-end, pero dispuesto a aprender nuevas tecnologías.",
        educacao: "Educación",
        instituicao: "IFNMG - Campus Januária",
        curso1: "Curso Técnico en Informática integrado con la Escuela Secundaria | 2018 - 2020",
        curso2: "Licenciatura en Sistemas de Información | 2022 - 2026",
        idiomasTitulo: "Idiomas",
        idioma1: "Portugués Nativo",
        idioma2: "Inglés Intermedio",
        experienciasTitulo: "Experiencias",
        exp1Titulo: "Técnico en Informática",
        exp1Local: "Autónomo | 2020 - 2022",
        exp1Texto1: "Tras terminar la escuela secundaria junto con el curso de técnico en informática, comencé a trabajar de forma independiente en mi área.",
        exp1Texto2: "Realicé actividades como ensamblaje, mantenimiento y formateo de computadoras y teléfonos móviles.",
        exp2Titulo: "Pasantía/Prestación de Servicios",
        exp2Local: "Núcleo do Pequi | 2024 - 2025",
        exp2Texto1: "Prestación de servicios aprovechada como pasantía remota para mi carrera universitaria.",
        exp2Texto2: "Realicé actualizaciones en el front-end utilizando HTML, CSS y WordPress. Subí archivos públicos, corregí errores y creé páginas responsivas.",
        exp2Texto3: "Participé en reuniones presenciales de la empresa, discutiendo cambios atractivos para el sitio web.",
        competenciasTitulo: "Competencias",
        tecnologiasTitulo: "Tecnologías de Desarrollo",
        frontEndTitulo: "Front-End",
        backEndTitulo: "Back-End",
        rodape: "&copy; Clebson Santos 2025 | Todos los derechos reservados"
    }
};

function trocarIdioma(lang) {
    document.querySelectorAll("[data-key]").forEach(el => {
        const chave = el.getAttribute("data-key");
        if (traducoes[lang] && traducoes[lang][chave]) {
            el.innerHTML = traducoes[lang][chave];
        }
    });
}

const btnIdiomas = document.querySelector(".idiomas-btn");
const dropmenu = document.querySelector(".dropmenu");
const bandeiraAtual = document.querySelector(".bandeira-atual");
const bandeirasMenu = dropmenu.querySelectorAll(".bandeira");

btnIdiomas.addEventListener("click", e => {
    e.stopPropagation();
    dropmenu.classList.toggle("show");
});

bandeirasMenu.forEach(bandeira => {
    bandeira.addEventListener("click", () => {
        const tempSrc = bandeiraAtual.src;
        const tempAlt = bandeiraAtual.alt;
        const tempTitle = bandeiraAtual.title;

        bandeiraAtual.src = bandeira.src;
        bandeiraAtual.alt = bandeira.alt;
        bandeiraAtual.title = bandeira.title;

        bandeira.src = tempSrc;
        bandeira.alt = tempAlt;
        bandeira.title = tempTitle;

        if (bandeiraAtual.alt === "PT-BR") trocarIdioma("pt");
        if (bandeiraAtual.alt === "EN-US") trocarIdioma("en");
        if (bandeiraAtual.alt === "ES-ES") trocarIdioma("es");

        dropmenu.classList.remove("show");
    });
});

document.addEventListener("click", () => {
    dropmenu.classList.remove("show");
});
