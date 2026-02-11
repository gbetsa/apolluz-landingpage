const reviewsHabitissimo = [
    {
        nome: "Mariana Porto",
        comentario: "Foram ótimos e muito rápidos!"
    },
    {
        nome: "Miguel Calvo Costa",
        comentario: "Pessoal muito educado atencioso e profissional. Fiquei impressionado com a capacidade e rapidez de todos."
    },
    {
        nome: "Renata Maksoud",
        comentario: "Ainda nao realizei a mudança mas ja escolhi a apolluz pelo profissionalismo com que fui atendida desde o primeiro contato."
    },
    {
        nome: "Saulo Ferreira",
        comentario: "Serviço excelente! Time muito prestativo e atencioso."
    },
    {
        nome: "Beatriz Accioly Nunes",
        comentario: "Equipe muito prestativa, educada e profissional."
    },
    {
        nome: "Daiane Melo Do Nascimento Domingos",
        comentario: "O serviço é maravilhoso, a equipe foi super organizada, tomam cuidado com tudo. Vou recomendar sempre que puder. Gostaria de agradecer o Gilberto, Amanda, Juliano, Rodrigo, Igor e Iwanielson por tudo que fizeram por nós."
    },
    {
        nome: "Marina Amorim",
        comentario: "Gostaria de deixar registrado meu agradecimento aos profissionais ímpares, educados e prestativos… Sr. Gilberto, Amanda, Alex, Emerson, Italo, Fabiano, Thales, Juliano, Rodrigo, Emerson, e Igor. Se dedicaram e empenharam para que tudo fosse realizado da melhor maneira e deu tudo certo. Sem dúvidas indicamos vocês e quando precisarmos novamente não deixaremos de contatar a Apolluz."
    },
    {
        nome: "Fernanda Flores",
        comentario: "Equipe muito ágil e cuidadosa, excelentes com móveis difíceis, ficamos muito satisfeitos com a equipe da Amanda e todos os funcionários estão de parabéns!"
    },
    {
        nome: "Juliana",
        comentario: "O atendimento foi incrível, super rápidos e cuidadosos! Obrigada Amanda, Ítalo, Fabiano e Alexandre!"
    },
    {
        nome: "Evangeline Ak Macdowell",
        comentario: "A equipe do Celso e Ailton fez um trabalho impecável. Chegaram pontualmente na hora marcada e rapidamente organizaram tudo. Extremamente cuidadosos, muito bom."
    },
    {
        nome: "Thiago Nassif Costa Silva",
        comentario: "Foi tudo ótimo!!"
    },
    {
        nome: "Dani",
        comentario: "Equipe super atenciosa, prestativa e cuidadosa com nossos pertences, comigo e com meus pais. Preocupação genuína conosco em toda a jornada. Com certeza farei as próximas mudanças com vocês :)"
    },
    {
        nome: "Erwin Goering Júnior",
        comentario: "Trabalho Excelente."
    },
    {
        nome: "Aline Santos Capua",
        comentario: "Empresa e equipe excelente!!! A equipe que nos atendeu foi muito prestativa e atenciosa, ambos Srs. Celso e Ailton foram muito comprometimento com a mudança e cumpriram o horário acordado. Essa foi minha segunda mudança com a empresa e acho que eles tem um otimo preço, custo e benefício. Muito obrigada!"
    },
    {
        nome: "Barbara",
        comentario: "Serviço excelente, preço justo e de qualidade. Equipe cuidadosa, educada e pontual. Um agradecimento especial aos meninos que nos ajudaram na mudança Italo, Alexandre, Ewanielson, Tiago, Dédé, Ailton."
    },
    {
        nome: "Bruna Silveira Soares",
        comentario: "Empresa profissional, de qualidade e confiança. Toda a mudança foi feita de forma espetacular, desde o carisma, embalagem minuciosa, até a entrega de tudo em perfeitas condições e boa vontade! Minha equipe foi Alexandre, Petronio, Thiago, Ítalo, Bruno e Iwanielson! Equipe de ouro. Preciso deixar meu agradecimento e admiração pelo Sr Gilberto, que desde a vistoria foi extremamente educado, respeitoso e empenhado. Enviou uma equipe nota mil, que me fez ficar triste de dar tchau!!!!"
    },
    {
        nome: "Silvio Luiz Arruda",
        comentario: "trabalho fantástico, limpo, organizado com preço justo e pessoal especializado, educado e carinhoso. primorosos. recomendo de olhos fechados."
    },
    {
        nome: "Gian Silva",
        comentario: "Parabenizo a Apolluz pela atenção e pela qualidade dos serviços. Nada se quebrou, eles entregaram no dia acertado, e o pessoal é bem legal. Ah, e o preço foi muito razoável. Ótima relação custo benefício."
    },
    {
        nome: "Vagner Mattiola",
        comentario: "Gostei do empenho em trazer minha mudança na data especificada e com tamanha boa qualidade na embalagem. Minhas coisas chegaram intactas. Recomendo."
    },
    {
        nome: "Valentino Ceratti - Agiplan",
        comentario: "Trabalho profissional e preço muito bom. Recomendamos!"
    },
    {
        nome: "Viviane",
        comentario: "Adorei desde o orçamento até o fechamento do contrato,super atenciosos e organizados,cuidaram super bem dos moveis e teve todo um cuidado entregando todos em perfeito estado,super recomendo!"
    },
    {
        nome: "Déboora Dias",
        comentario: "Recomendo esta empresa, funcionários muito atenciosos e cuidadosos, nada se quebrou e fiquei muito satisfeita com o serviço, além do que muito pontuais no horário. Recomendo a empresa e com certeza caso necessite novamente do serviço, fecharei negócio novamente com a Apolluz, pois além da qualidade também ofereceram um preço justo. Obrigada Apolluz!"
    },
    {
        nome: "Christian",
        comentario: "Gostei muito da experiência com a apolluz. Cumpriram muito bem a mudança contratada, sem sustos e rigorosamente conforme o combinado."
    },
    {
        nome: "Mirian Caramello Uliano",
        comentario: "Gostei bastante, deu tudo certo! Montagem e desmontagem, inclusive."
    },
    {
        nome: "Thaís",
        comentario: "A equipe do Solto, Guilherme e César foi excelente no trabalho, desde o embalo na origem até o processo de entrega. Todos simpáticos e atenciosos!"
    },
    {
        nome: "Bruna Schiesari Campiello Ber",
        comentario: "Sr. Gilberto entrou em contato comigo, informou que não teria disponibilidade na data que eu precisava, porém ficou 20min comigo no telefone me orientando sobre o orçamento da mudança e como funciona todo o processo. Só por essa dedicação e atenção mesmo sabendo que nao poderia me atender eu dou nota 10. Pena nao poder contratar seu serviço."
    },
    {
        nome: "Mariana Fernanda Pérez de Almeida",
        comentario: "A equipe do Alexandre, Italo e Thiago foi impecável, pontual, ágil e muito cuidadosa com a minha mudança. Todos muito gentis e com muita boa vontade, ao mesmo tempo que muito eficientes no processo todo da mudança. O Gilberto foi muito atencioso no atendimento e na visita remota para avaliação do custo. Foi a empresa que me deu o melhor custo mas que atendia meus requisitos de segurança, como seguro da mudança e entrega no dia seguinte. Recomendo totalmente!"
    },
    {
        nome: "Luciana Schechtmann",
        comentario: "Turma incrível . Educados, serviço excelente. Limpeza, arrumação, não imaginava que seria tão perfeito! Já fiz outra mudança mas essa foi muito acima do normal. Os cuidados com os pertences e tudo - sem palavras. Equipe : Alexandre, Petronio, Ítalo, Raí, Dedé obrigada de coração! Gilbeto obrigada"
    },
    {
        nome: "Katia T Costa",
        comentario: "Rapazes muito solicitos, bem educados, competentes, cuidadosos e trabalhadores. Foram impecáveis e como ja fiz 18 mudanças nacionais e internacionais considero a equipe que me atendeu chefiada pelo sr Alexandre como nota 10! Sem duvida indico a empresa!"
    }
]


const fetchReviews = async () => {
    try {
        // Requisição ao endpoint de backend para buscar as avaliações
        const response = await fetch('/api/reviews');

        if (!response.ok) {
            throw new Error('Falha na requisição ao backend');
        }

        const data = await response.json();

        if (data.reviews && data.reviews.length > 0) {
            let reviews = data.reviews;

            // Ordenar as avaliações por data de publicação (ordem decrescente)
            reviews.sort((a, b) => {
                const dateA = new Date(a.iso_date);
                const dateB = new Date(b.iso_date);
                return dateB - dateA; // Ordem decrescente
            });

            // Filtrar e mapear os dados para o formato desejado
            let newReviews = reviews.map(item => ({
                nome: item.user.name || "Anônimo",
                comentario: item.snippet || "Sem comentário",
            }));


            // Remover a avaliação do Altieri (se existir)
            newReviews = newReviews.filter(review => review.nome !== "Altieri Benedito da Silva de Jesus");

            // Reverter a ordem das avaliações (se necessário)
            newReviews.reverse();

            newReviews.forEach(review => {
                if (review.comentario !== "Sem comentário") {
                    reviewsHabitissimo.unshift(review);
                }
            });

            // Chama a função de criação dos depoimentos, passando os dados filtrados
            createTestimonials();
        } else {
            console.log('Nenhuma avaliação encontrada.');
            createTestimonials();
        }
    } catch (error) {
        console.error('Erro ao buscar as avaliações:', error);
        createTestimonials();
    }
};

// Chamar a função para buscar e integrar os dados
fetchReviews();


const sliderContainer = document.getElementById("slider-container");

function createTestimonials() {
    reviewsHabitissimo.forEach((review, index) => {
        const testimonialCard = document.createElement("div");
        testimonialCard.classList.add("testimonials-card");
        testimonialCard.innerHTML = `
            <div class="testimonials-card-stars">
                <img src="./src/5estrelas.svg" alt="5 estrelas">
            </div>
            <p>${review.comentario}</p>
            <h4>${review.nome}</h4>
        `;
        sliderContainer.appendChild(testimonialCard);
    });

    initSlider();
}



function initSlider() {
    const testimonials = document.querySelectorAll('.testimonials-card');
    const btnNext = document.getElementById('seta-direita');
    const btnPrev = document.getElementById('seta-esquerda');
    const totalTestimonials = testimonials.length;
    let currentIndex = 0;

    // Calcula dimensões do card e gap
    const calculateDimensions = () => {
        const cardWidth = testimonials[0].offsetWidth;
        const gap = parseFloat(getComputedStyle(sliderContainer).gap) || 0;
        const containerWidth = sliderContainer.offsetWidth;

        // Ajuste no cálculo para garantir a visibilidade de acordo com a largura da tela
        let visibleItems = Math.floor(containerWidth / (cardWidth + gap)); // Cálculo base

        // Ajustes de visibilidade para cada tipo de dispositivo
        if (containerWidth <= 599) {
            visibleItems = 1; // Celulares (1 card)
        } else if (containerWidth <= 900) {
            visibleItems = 2; // Tablets (2 cards)
        } else {
            visibleItems = 3; // Desktop (3 cards)
        }

        // Garantir que a visibilidade nunca seja menor que 1
        visibleItems = Math.max(visibleItems, 1);

        return { cardWidth, gap, visibleItems };
    };

    // Atualiza a posição do slider
    const updateSliderPosition = () => {
        const { cardWidth, gap } = calculateDimensions();
        const offset = -currentIndex * (cardWidth + gap);
        sliderContainer.style.transform = `translateX(${offset}px)`;
        sliderContainer.style.transition = 'transform 0.5s ease-in-out';
    };

    // Próximo slide (com looping)
    const nextSlide = () => {
        const { visibleItems } = calculateDimensions();
        if (currentIndex >= totalTestimonials - visibleItems) {
            currentIndex = 0; // Volta ao primeiro slide
        } else {
            currentIndex++;
        }
        updateSliderPosition();
    };

    // Slide anterior (com looping)
    const prevSlide = () => {
        const { visibleItems } = calculateDimensions();
        if (currentIndex === 0) {
            currentIndex = totalTestimonials - visibleItems; // Vai para o último conjunto de slides visíveis
        } else {
            currentIndex--;
        }
        updateSliderPosition();
    };

    // Eventos para os botões
    btnNext.addEventListener('click', nextSlide);
    btnPrev.addEventListener('click', prevSlide);

    // Atualizar o slider ao redimensionar a janela
    window.addEventListener('resize', updateSliderPosition);

    // Inicialização
    updateSliderPosition();
}
