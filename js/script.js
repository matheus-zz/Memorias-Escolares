document.addEventListener('DOMContentLoaded', () => {

  // ==========================================
  // 1. DADOS (REDAÇÕES CORRIGIDAS COMPLETAS)
  // ==========================================
  const REDACOES = [
    {
      id: 1, titulo: "Mudanças climáticas e a crise hídrica no Brasil",
      tema: "Quando a seca encontra a enchente: impactos sociais e econômicos das mudanças no ciclo hidrológico",
      texto: "Na música 'Aquarela' de Toquinho, ele fala 'o futuro é uma astronave que tentamos pilotar'. Nosso futuro está fora do controle, no momento presente, a astronave não consegue ir direto. O Brasil vive verdadeiramente uma montanha russa climática. A cada dia vem uma seca destruindo o Nordeste, seguida de uma chuva destruindo o Sudeste. O descontrole do clima gera uma realidade perturbadora para milhares de famílias, que não conseguem dormir. Isso ocorre porque nossas cidades não estão preparadas e nosso campo sendo fortemente afetado.\n\nA realidade é que nossas cidades cresceram sem olhar para a natureza, o sociólogo Ulrich Beck ao falar da 'Sociedade de Risco' mostra que nós mesmos criamos ambientes de risco. Basta que chova mais forte e o asfalto não aguenta a quantidade de água, nossas ruas viram rio. E quem paga o preço são nossas classes mais pobres, que veem seus bens e casas levar a enchente.\n\nEm nosso campo a situação é desoladora. Pouca chuva destrói a plantação do pequeno agricultor, que acaba levando a famosa inflação no preço do tomate na feira da esquina. Esse é o famoso 'efeito dominó'. Quando o agricultor perde, o preço sobe, a inflação aumenta, a mesa do brasileiro fica vazia. E ainda temos nosso muito orgulhoso agronegócio perdendo bilhões de reais com a estiagem.\n\nO que precisamos é acabar com o discurso, e colocar a mão na massa. É necessário que o poder público juntamente com a Defesa Civil invista fortemente em drenagens e construa reservatórios nas cidades. Além de que os pequenos produtores rurais precisam de linhas de crédito emergencial no campo. E cada cidadão precisa contribuir, ligando o registro do banheiro enquanto lava o cabelo. A crise é séria, porém, a união é nossa melhor defesa."
    },
    {
      id: 2, titulo: "Canetas emagrecedoras e a pressão estética",
      tema: "A estética como imperativo: riscos e implicações do uso indiscriminado de canetas emagrecedoras",
      texto: "Quase todo mundo conhece a história da Bela e da Fera. Ela nos ensina que o verdadeiro amor vai além da aparência. No entanto, essa lógica não vem sendo seguida no mundo real. Hoje, o que mais se vê é que a beleza física é tão obsedante que leva as pessoas a caminhos muito perigosos para atingirem seus objetivos. Um desses caminhos é o uso da caneta emagrecedora sem qualquer acompanhamento médico. O ideal do corpo perfeito, que antes era apenas um objetivo pessoal, virou um problema de saúde pública. E, além da pressão das redes sociais, o que falta mesmo é fiscalização.\n\nO espelho, que seria nosso maior aliado, hoje é nosso pior inimigo. Como já dizia a escritora Clarice Lispector: 'liberdade é pouco, o que eu desejo ainda não tem nome'. Bem, hoje esse nome tem. Esse nome chama-se corpo perfeito. As redes sociais são inundadas de fotos editadas e corpos impossíveis de se alcançar. Hoje, temos uma caneta mágica que, em um dia, consegue o que a academia não consegue. Mas o que poucos sabem é que essas substâncias têm graves efeitos colaterais que ficam ocultos.\n\nVer jovens mutilando sua saúde para ganhar pontos de vaidade é um desastre. As injeções podem levar a graves problemas gastrointestinais e até falência de órgãos. A pressão psicológica para se enquadrar nesse modelo de beleza é tão grande que muitas vezes o perigo passa despercebido. É como se a única coisa que importasse fosse ter uma cintura fininha, não importa o preço.\n\nPrecisamos urgentemente mudar de rumo. A Anvisa deve aumentar o cerco às farmácias e sites clandestinos. Mas, no fim, o problema está na educação. As escolas precisam iniciar rodas de conversa com psicólogos para que o tema do amor próprio e das diversas formas de corpos possa ser discutido sem pudores. E a sociedade precisa deixar de aplaudir quem emagrece doente e começar a aplaudir quem está saudável."
    },
    {
      id: 3, titulo: "Deepfakes e desinformação na era da IA",
      tema: "O uso da Inteligência Artificial e as deepfakes: o que é real e o que é fictício na vida online?",
      texto: "Vocês ainda se lembram do filme 'O Show de Truman'? Nele, o protagonista vive em um mundo fictício criado para entretenimento. Agora, com o advento da Inteligência Artificial e das chamadas deepfakes, todos nós vivemos como o Truman do filme. É cada vez mais difícil saber se aquela imagem de uma autoridade, ou aquele áudio de um parente, é real ou uma simples manipulação feita por um algoritmo tecnológico. E essa nova realidade destrói a confiança. E põe em risco a própria segurança.\n\nA verdade virou produto de luxo. Na obra 'A Máscara da Morte Rubra', Edgar Allan Poe relata uma estratégia de ilusão para enganar a própria morte. Já as deepfakes são uma estratégia de ilusão para enganar a percepção humana. Um único clique de mouse é suficiente para que o cidadão comum possa assitir a um político dizendo coisas absurdas que ele nunca disse. E a internet repassa esses vídeos em segundos. Ele não sabe em quem acreditar.\n\nPara além do caos político, essa tecnologia também tem sido utilizada em crimes. Golpistas usam a clonagem de vozes de familiares para cometer golpes horríveis por telefone. Pessoas de bem, muitas vezes idosos, caem nesses golpes e transferem uma vida de economia achando que estão fazendo um favor ao filho. A crueldade do que a tecnologia possibilitou é imensa.\n\nNão podemos permitir que a mentira prevaleça. O Congresso precisa aprovar leis duras para punir quem criar essas falsificações. As redes sociais precisam implantar selos de verificação reais. Mas a maior arma de defesa é a educação. É preciso ensinar os jovens a duvidar, a pesquisar a fonte, a questionar o que vê no celular. Nossa maior arma é o senso crítico."
    },
    {
      id: 4, titulo: "Bets e o endividamento dos jovens",
      tema: "Da diversão ao endividamento: efeitos socioeconômicos das bets na vida de jovens brasileiros",
      texto: "Na obra 'A Cartomante' de Machado de Assis, as personagens vivenciam o delírio de domínio sobre seu destino. Fora da ficção, o que ocorre é mais ou menos parecido. Atualmente, há uma febre das bets. Milhares de jovens se envolvem nesse tipo de jogo online na falsa esperança de ganhar dinheiro fácil. E, assim, vão se enfiando cada vez mais fundo nas dívidas e na agonia de suas famílias. A indústria de apostas aproveita-se dessa fragilidade dos jovens e de sua pouca educação financeira para lucrar muito.\n\nO delírio de riqueza começa no marketing exagerado. Influencers digitais vivem em luxo, dirigem carros importados e espalham a mensagem de que as bets são uma via expressa para o sucesso. O jovem sonha em ter essa vida e, como talvez tenha um pouco de dinheiro, investe tudo no jogo. O que ele não sabe é que isso é uma cruel armadilha. As plataformas trabalham sempre a seu favor, nunca do jogador.\n\nPior ainda é o impacto na vida da família. O que era suposto ser uma brincadeira de fim de semana se transforma em uma bola de neve. O jovem perde todo o seu salário e começa a fazer empréstimos a juros abusivos. Muitas vezes, vai até a agiota. A depressão e a ansiedade se instalam na mente. A relação entre os familiares se desintegra. O que foi criado para unir se transforma em uma arma de destruição.\n\nPrecisamos acordar desse pesadelo. O governo federal precisa impedir que essas empresas façam propaganda em programas e redes de televisão destinadas ao público jovem. Também é necessário tirar a educação financeira do papel e implementar nas escolas como disciplina obrigatória. É fundamental ensinar aos alunos a importância do trabalho e os riscos do endividamento."
    },
    {
      id: 5, titulo: "Inclusão digital no Brasil",
      tema: "Inclusão digital no Brasil: caminhos e desafios na sociedade contemporânea",
      texto: "Na música 'Pela Internet', Gilberto Gil antecipou a realidade atual da internet no mundo. No Brasil, porém, o problema da exclusão continua presente. O acesso à rede que antes era visto como um luxo, hoje é considerado um direito básico. Acontece que, apesar disso, milhões de brasileiros continuam presos a um 'apagão digital'.\n\nO primeiro obstáculo a ser superado é o físico. Nada adianta, por exemplo, ter um celular moderno se não houver sinal. Ter internet de qualidade é um direito garantido pelo Marco Civil da Internet. Acontece que o alcance dessa lei não chega aos becos e comunidades rurais. Assim, sem acesso à fibra ótica elas permanecem afastadas do mercado de trabalho e de oportunidades de qualificação.\n\nO segundo obstáculo é o do conhecimento. Como dizia o educador Paulo Freire, 'educação é liberdade'. E, no caso das tecnologias, além de possuir o aparelho, é necessário saber utilizá-lo com discernimento. Muitas pessoas têm celulares, mas não sabem pesquisar na internet com segurança, entrar em um banco ou evitar golpes virtuais. Essa exclusão digital mantém a desigualdade social e a alienação.\n\nO Estado precisa urgentemente investir levando internet de qualidade e gratuita para essas comunidades. As escolas devem também inserir no currículo a 'cidadania digital' para que os alunos possam navegar com segurança e produtividade. Para que a internet seja uma ponte para melhor futuro e não um muro que divide ricos e pobres."
    },
    {
      id: 6, titulo: "Cultura fitness e transtornos corporais",
      tema: "Cultura fitness: bem-estar ou busca por estética inatingível?",
      texto: "No filme Cisne Negro, acompanhamos a história de uma bailarina que, na sua busca pela perfeição total, deixa de lado a realidade e entra num estado de loucura. Esse tipo de obsessão não está mais restrita às telas cinematográficas. Com a ajuda das redes sociais, a cultura fitness transformou a busca de um corpo saudável numa verdadeira tortura mental. O resultado são jovens com grave distúrbio alimentar como a vigorexia e a ortorexia.\n\nA linha entre a saúde e a doença é muito tênue. O indivíduo procura se exercitar para se sentir bem, mas, em breve, o espelho se torna seu pior inimigo. Enquanto no livro de Machado de Assis, O Espelho, o personagem questiona quem ele realmente é, hoje os jovens medem seu valor só pela aparência que têm. E o que era uma atividade prazerosa, a academia, se tornou um compromisso diário. Ignoram o cansaço para manter aquele shape.\n\nEssa pressão é cruel e leva à loucura. Comparar-se com corpos de modelos e atletas (muitas vezes editados ou fazendo uso de anabolizantes) causa enorme frustração. Hoje, os consultórios médicos estão cheios de jovens com lesões e problemas renais causados por excesso de suplementos e remédios sem prescrição médica. Tudo disfarçado com uma foto no Instagram.\n\nÉ necessário que o conceito de saúde seja repensado. As escolas precisam fomentar o esporte para o prazer e para o trabalho em equipe e não para a estética. Os profissionais de saúde devem levar a sério as ameaças dos distúrbios alimentares. A verdadeira beleza é a persistência, o equilíbrio e, principalmente, o amor próprio."
    },
    {
      id: 7, titulo: "Direitos indígenas e demarcação de terras",
      tema: "Povos originários e direitos constitucionais: desafios para a efetivação da cidadania indígena no Brasil",
      texto: "José de Alencar, no livro 'Iracema', retrata o índio idealizado e obediente ao colonizador. Hoje é bem diferente. A luta e a resistência são características do indígena. Eles não querem ser idealizados, eles lutam pelo respeito à sua sobrevivência, à sua terra e a seus direitos previstos na Constituição. A disputa pela terra é uma chaga que põe em risco a cultura e a própria existência do indígena.\n\nA avidez do lucro tem sido o fator destruidor. O termo 'aporofobia', cunhado pela filósofa Adela Cortina, refere-se ao medo e repúdio aos pobres. No caso brasileiro, os pobres são os indígenas. Quando os garimpeiros invadem suas terras e a expansão da agricultura se dá, o que importa é o lucro rápido. A floresta viva não é um bem - ela é um empecilho ao agronegócio.\n\nOs direitos básicos também são negligenciados. Embora previsto na Constituição, o direito à terra é violado, pois, sem fiscalização, os líderes indígenas são assassinados e os rios são contaminados. Na saúde e na educação, que são direitos básicos, os serviços são precários e desrespeitam a cultura local. A língua e a medicina tradicionais são negligenciadas, o que dificulta ainda mais a inclusão desses povos na sociedade.\n\nPortanto, para garantir a cidadania indígena, o Estado deve tomar medidas enérgicas. Os órgãos responsáveis, como a FUNAI, precisam de mais recursos e autonomia para fazer a demarcação e a fiscalização das terras. As escolas devem cumprir a lei e dar a verdadeira história dos povos originários. Assim, a nova geração irá valorizar e respeitar quem sempre esteve aqui."
    },
    {
      id: 8, titulo: "Algoritmos, bolhas e autonomia individual",
      tema: "Consumo, mídia e cultura: como referências mediadas por algoritmos influenciam os modos de vida na sociedade contemporânea",
      texto: "No livro 'Admirável Mundo Novo', de Aldous Huxley, mostra uma sociedade em que os indivíduos são condicionados à felicidade e ao consumo, sem questionar nada. Atualmente, essa ficção tem se mostrado cada vez mais real, pois os algoritmos das redes sociais têm se tornado uma espécie de manipulação digital, que expõe ao usuário apenas aquilo que ele quer ver, levando-o a um consumo desenfreado.\n\nPrimeiramente, esse tipo de mecanismo gera bolhas. No livro 'A Sociedade do Cansaço', do filósofo Byung-Chul Han, fala-se sobre o cansaço causado pela constante necessidade de validação. Nesse sentido, os indivíduos, imersos em feeds que reforçam as suas crenças, acabam ficando alienados ao diferente, o que prejudica o debate democrático, criando uma polarização extrema.\n\nOutrossim, há também um consumo desenfreado fomentado por influencers que mostram vidas perfeitas, viagens incríveis e produtos mágicos. As pessoas que observam esses conteúdos se sentem inferiores e passam a comprar compulsivamente para se adequarem ao padrão. Desse modo, cria-se um ciclo de insatisfação infinito, em que o que importa não é ser, mas ter.\n\nPortanto, é crucial que as novas gerações aprendam a questionar. Para isso, a educação midiática nas escolas deve mostrar como funcionam os algoritmos e como a publicidade age. Além disso, o poder público deve cobrar das empresas maior transparência no seu modo de filtragem. Assim, a tecnologia servirá ao ser humano e não ao lucro."
    },
    {
      id: 9, titulo: "Preservação do patrimônio histórico",
      tema: "Os desafios para a preservação dos monumentos históricos no Brasil contemporâneo",
      texto: "Na obra 'Narradores de Javé', há a exploração da história de uma comunidade que luta para não perder sua própria história, porque não possui nenhum registro oficial. Fora da ficção, no Brasil real, a história se repete. Os monumentos históricos que deveriam ser narradores da história estão abandonados. Eles se vêem à mercê da falta de recursos e da especulação imobiliária. O respeito ao patrimônio histórico é primordial para que não nos perdemos na história.\n\nEm primeiro lugar, o grande vilão é o abandono. O incêndio do Museu Nacional no Rio de Janeiro é um reflexo de como a história é negligenciada. Prédios antigos, igrejas e centros culturais vão se desgastando aos poucos, porque o poder público não investe na conservação e restauração desses espaços.\n\nAlém disso, a população também não se sente pertencente a esses espaços. Sem educação sobre patrimônio, a pessoa não vê mais valor num casarão antigo e o degrada. Além disso, a construção civil pressiona para que esses espaços sejam demolidos e que possam construir novos empreendimentos. Assim, as cidades perdem suas memórias.\n\nA união é necessária para que essa situação seja revertida. É importante que o setor privado adote prédios históricos e os converta em centros culturais. As escolas devem estimular os alunos a visitarem museus e espaços históricos. A história não pode ser esquecida, ela precisa ser vivida e respeitada por todos."
    },
    {
      id: 10, titulo: "Exploração espacial e desigualdade",
      tema: "Exploração espacial no século XXI: desafios para a conciliação entre avanço científico e responsabilidade social",
      texto: "Na obra de Antoine de Saint-Exupéry, 'O Pequeno Príncipe', o protagonista chega a um pequeno planeta onde há um homem que conta e possui estrelas, porém não tem nada a fazer com elas, além de ser um empresário. Tal situação aparentemente absurda retrata com exatidão o que vem acontecendo na atual exploração espacial. Hodiernamente, bilionários investem suas fortunas em passeios no espaço e mineração de asteroides, enquanto milhões de pessoas sofrem na Terra para conseguir um simples prato de comida e saneamento básico.\n\nA inversão de valores é gritante. Segundo o filósofo Hans Jonas, o 'Princípio Responsabilidade' defende que a tecnologia deve ser utilizada para garantir a vida humana. Hoje, porém, a ciência que deveria ser usada para curar doenças é utilizada para dar passeio a alguns poucos e desfrutar de algo que, em um mundo com tantos problemas (fome, falta de água), é imoral.\n\nAlém disso, essa exploração desordenada gera um novo tipo de contaminação, que são os satélites inutilizados e detritos que colocam em risco as comunicações mundiais. Aquele espaço que deveria ser colaborativo entre as nações torna-se uma nova fronteira de disputas comerciais e interesses pessoais.\n\nPortanto, é imprescindível que haja uma regulação mundial para que a ciência possa ser justa. A ONU deve elaborar leis nas quais os países devem investir parte do lucro advindo da exploração espacial na erradicação da pobreza na terra. O espaço é fascinante, porém, o mais importante é salvarmos nosso planeta e espécie."
    },
    {
      id: 11, titulo: "Conservação da fauna brasileira",
      tema: "Espécies em extinção e equilíbrio ecológico: desafios para a conservação da fauna brasileira",
      texto: "Em 'O Velho e o Mar' de Ernest Hemingway, o personagem principal, Santiago, tem um profundo respeito e zelo pela natureza. Infelizmente, isso não ocorre no Brasil. O desmatamento, as queimadas e o tráfico de animais silvestres têm sido fatores de destruição da fauna brasileira.\n\nO primeiro grande problema é que as áreas de habitat são destruídas. Com o crescimento da agricultura e das cidades invadindo as florestas, os animais acabam desabrigados e sem comida. A Teoria do Caos mostra que a perda de uma única espécie pode causar efeitos em cadeia (efeito dominó). Dessa forma, toda a cadeia alimentar é desequilibrada, afetando até mesmo nossa produção de alimentos.\n\nOutra prática cruel é o tráfico de animais. Milhões de passarinhos, macacos, entre outros bichos, são capturados na natureza para serem vendidos nas feiras ilegais. Muitos morrem no trajeto e os que chegam vivos são mantidos em condições miseráveis nos cativeiros. A fiscalização ainda é muito precária e a impunidade é norma.\n\nPara que a fauna possa ser preservada, é necessário que haja fiscalização rigorosa e tecnologizada (drones) para monitorar as regiões remotas. É necessário também que as penas para os crimes contra o meio ambiente sejam mais severas. E a sociedade precisa ser educada para que possa denunciar este comércio ilegal e preservar as áreas verdes, pois a natureza é nosso maior tesouro."
    },
    {
      id: 12, titulo: "Migração e acolhimento de refugiados",
      tema: "Migração e acolhimento: desafios da convivência em contextos globais",
      texto: "Macabéa, personagem principal do livro 'A Hora da Estrela' de Clarice Lispector, é uma jovem nordestina que sobrevive nas ruas do Rio de Janeiro sem ser vista por ninguém. Infelizmente a realidade dos milhares de refugiados e imigrantes que vêm ao Brasil anualmente em busca da paz e da sobrevivência é a mesma de Macabéa: invisíveis. A questão do acolhimento desses indivíduos é um dos maiores desafios humanitários do nosso tempo.\n\nA primeira dificuldade é o preconceito. Muitos imigrantes sofrem com a xenofobia e são maltratados. Eles são vistos como suspeitos e hostis. Além disso, eles enfrentam a barreira da língua e a não validação dos seus diplomas. Assim, são direcionados a trabalhos informais e precários onde são explorados. Eles estão fora de seus lares e vivem numa situação de instabilidade e medo.\n\nA falta de políticas públicas de amparo agrava ainda mais a situação. Muitos imigrantes sofreram traumas das guerras e violências pelas quais foram expostos e não têm o suporte psicológico necessário. Os abrigos são super lotados e a condição de habitar de forma digna está longe. O Estado muitas vezes falha em garantir o mínimo para essas pessoas.\n\nPara que a integração ocorra, o governo deve facilitar a burocracia para a documentação e criar programas de capacitação e amparo social. As escolas e a mídia devem trabalhar contra a desinformação e promover a empatia. O primeiro passo para uma sociedade mais humana é ver que o migrante não é o inimigo, mas sim um portador de cultura e mão de obra."
    },
    {
      id: 13, titulo: "Eventos climáticos extremos",
      tema: "El Niño e mudanças climáticas: desafios para a preparação da sociedade diante de eventos extremos",
      texto: "De acordo com a mitologia grega, Poseidon era o Deus dos Mares, e ele ficava furioso quando não recebia respeito, causando grandes tempestades. O nome científico para a ira dos mares é El Niño e as mudanças climáticas. O país vem sofrendo com secas históricas e chuvas torrenciais. Nossas cidades e nosso campo estão fragilizados nesse novo cenário.\n\nEssa é uma questão de caráter estrutural. Quando não existe um bom planejamento urbano toda chuva vira uma tragédia. Com o solo impermeabilizado e a falta de sistema de drenagem, as ruas viram rios. A Defesa Civil dificilmente consegue intervir a tempo para salvar vidas e propriedades e acaba registrando quantos prejuízos foram causados e quantas vidas foram perdidas.\n\nO problema também é de justiça social. A Justiça Climática nos mostra que quem mais sofre são os mais pobres. As regiões seguras são caras e essas pessoas são forçadas a morar nas encostas e margens de rios, e quando chove elas perdem tudo.\n\nPara resolver esse problema precisamos investir na prevenção. É necessário que o poder público desenvolva planos de adaptação e crie cidades mais resilientes e crie um fundo de amparo para as vítimas de desastres naturais. A natureza não pode ser controlada, mas podemos nos preparar para enfrentar sua ira."
    },
    {
      id: 14, titulo: "Caminhos para combater a intolerância religiosa",
      tema: "Caminhos para combater a intolerância religiosa no Brasil",
      texto: "'O Estado não pode fazer nada acerca das crenças particulares dos indivíduos, e o que deve fazer é garantir-lhes a liberdade de crença.' Esse é um trecho da 'Carta sobre a Tolerância', do filósofo John Locke. Embora a Constituição brasileira de 1988 garanta o direito à liberdade de crença, percebem-se casos de intolerância aberta no Brasil, principalmente para as religiões de matriz africana. Isso é um atentado à dignidade e à história do povo brasileiro.\n\nÉ válido destacar que essa intolerância tem suas raízes no passado. Os negros escravizados trouxeram ao Brasil tradições e cultos que foram demonizados e perseguidos, devido às feridas causadas pela escravidão. Atualmente, é possível ver que ainda existem terreiros de Candomblé e Umbanda sendo depredados, e seus praticantes sendo agredidos. Em um país laico não podem ocorrer tamanhas agressões.\n\nOutro grande problema é a impunidade dos agressores. A falta de atuação social e do Estado corrobora para a impunidade. Uma agressão cometida por motivo de fé deve ser considerada um crime grave, merecedor de penas rigorosas. O silêncio contribui para a prática do preconceito.\n\nPortanto, para que haja mudança nesse cenário, é necessário que o Ministério Público crie delegacias especializadas no combate à intolerância religiosa. A educação é também de suma importância. É necessária a difusão das diferentes religiões nas escolas, para que os alunos aprendam a dialogar e respeitar uns aos outros. Somente quando todo brasileiro puder exercer sua fé livre de qualquer medo de agressão poderá haver a verdadeira liberdade de culto."
    },
    {
      id: 15, titulo: "Agro forte, futuro sustentável",
      tema: "Agro forte, futuro sustentável: equilíbrio entre produção e meio ambiente",
      texto: "Na obra 'Torto Arado', Itamar Vieira Junior retrata a luta das comunidades rurais na obtenção da Terra e da Dignidade. Embora o Brasil seja um dos maiores produtores mundiais de agronegócio, é necessário analisarmos as formas de produção atualmente utilizadas. O mundo do amanhã precisa de um setor agropecuário forte, que possa crescer em harmonia com a conservação do meio ambiente para que ele possa ser sustentável para as futuras gerações.\n\nA forma de exploração atual é insustentável, pois o uso exacerbado de agrotóxicos acaba contaminando o solo, os rios e as populações. O desmatamento acelerado para criação de novas pastagens provoca desequilíbrio no clima que acaba dificultando a própria atividade agrícola. Em nome do lucro imediato, o produtor está destruindo a sua maior ferramenta de trabalho: a natureza.\n\nEntretanto, a ciência e a tecnologia mostram que é possível fazer mais e melhor, restaurar a área degradada e conservar os recursos hídricos. A Agroecologia e sistemas como a ILPF (Integração Lavoura-Pecuária-Floresta) mostram que é possível produzir mais e melhor. É importante que o produtor rural veja o meio ambiente não como um obstáculo para o seu negócio, mas como um aliado.\n\nÉ necessário que o governo incentive as boas práticas, facilitando o acesso ao crédito e dando isenções fiscais para quem praticar a agricultura de baixo carbono. É fundamental também que a educação no campo e os serviços de extensão rural contribuam para que o agricultor tenha acesso à informação técnica. Um setor agropecuário realmente forte é aquele que trata a terra com respeito e pratica a agricultura consciente."
    },
    {
      id: 16, titulo: "O respeito às diferenças como caminho para a superação dos conflitos sociais",
      tema: "O respeito às diferenças como caminho para a superação dos conflitos sociais na sociedade contemporânea",
      texto: "No livro 'O Corcunda de Notre Dame', de Victor Hugo, o personagem Quasímodo, ao ser exposto fisicamente, sofre um olhar condenatório da sociedade, que rejeita a sua existência. Fora da ficção, o que se observa é a permanência dessa intolerância, diante do que foge da padronização. Nesse sentido, é perceptível que o respeito à diferença, que antes era considerado algo virtuoso, hoje é a única forma viável de se vencer os conflitos sociais, haja vista que o mundo contemporâneo é pautado na diversidade.\n\nSabe-se que o preconceito advém da ignorância e do etnocentrismo. Esse último consiste na ideia de que a nossa cultura/crença é superior às outras. Esse pensamento leva à exclusão de negros, indígenas, LGBTQI+, mulheres, entre muitos outros grupos. Além disso, esse olhar limitado justifica a violência (física e simbólica), impedindo assim o avanço da sociedade como um todo.\n\nA empatia é o elemento-chave para que tudo isso seja ultrapassado. Segundo o filósofo Emmanuel Lévinas, é necessário sair de si e ir ao encontro do outro, recebê-lo na totalidade. Dessa forma, faz-se necessário a prática da escuta ativa e do diálogo real. Assim, ao ouvirmos a história do outro que é diferente de nós, as barreiras são eliminadas e percebe-se que todos sonham e têm medos iguais.\n\nNesse contexto, a educação e o Estado são de suma importância. A escola deve ser um espaço de celebração da diversidade. O respeito à diferença precisa ser ensinado desde a mais tenra idade. Por fim, cabe ao Estado a punição rigorosa dos crimes de ódio e a criação de campanhas que exaltam o valor da convivência pacífica. A diferença não só nos torna únicos, mas enriquece a nação pela pluralidade."
    },
    {
      id: 17, titulo: "Obsolescência programada e o descarte de lixo eletrônico",
      tema: "Obsolescência tecnológica e descarte de resíduos eletrônicos: desafios para a sustentabilidade no Brasil",
      texto: "Na crônica 'O Lixo', Luis Fernando Verissimo reflete sobre o quanto consumimos e jogamos fora. Atualmente, o lixo de maior crescimento no mundo é o lixo eletrônico. A obsolescência programada, que é a prática das indústrias de produzir bens de consumo com duração curta, tem criado um grande problema ao meio ambiente, pois está sujando a terra e as águas.\n\nAs indústrias vivem de um consumismo sem controle. A cada novo modelo de celular lançado, milhões de velhos celulares são descartados. O documentário 'Comprar, Tirar, Comprar' mostra que as empresas usam todas as artimanhas possíveis para que o aparelho fique inutilizável o mais rápido possível, obrigando o consumidor a comprar um novo. E o que torna esse descarte ainda mais grave são os metais pesados (chumbo, mercúrio, etc.) que estão dentro desses aparelhos, altamente tóxicos.\n\nO desperdício nesse processo é gritante. Celulares e computadores contêm ouro, prata, cobre, entre outros materiais que poderiam ser reciclados, reaproveitados, gerando economia e beneficiando o meio ambiente. Em razão da falta de informações e de locais de coleta, tudo isso vai parar nos lixões e acabar poluindo a natureza.\n\nO poder público precisa obrigar as empresas a realizarem a chamada logística reversa que visa à recolha dos produtos velhos para serem reciclados. Além disso, juntamente com as escolas, tem que promover a educação do consumo consciente. É necessário que as crianças saibam que a preservação do planeta passa, fundamentalmente, pelo consumo consciente."
    }
  ];

  const MEMORIAS = [
    { fase:'pre-escola', ano:'2024-2026', titulo:'O primeiro dia', img: 'assets/img/WhatsApp Image 2026-11-22 at 12.05.50 (1).jpeg', texto:'A mochila era maior que eu. Lembro de ficar colado na perna da minha mãe na porta da sala, com medo de entrar e não conhecer ninguém. A professora me acolheu com um sorriso e me deu um giz de cera amarelo. Foi ali, rabiscando a primeira folha, que entendi que a escola não era um lugar assustador era o começo de tudo.' },
    { fase:'fundamental', ano:'2024-2026', titulo:'Anos de descoberta', img: 'assets/img/WhatsApp Image 2026-11-22 at 12.05.50.jpeg', texto:'O tempo passou e eu fui crescendo junto com os cadernos. Foram anos de provas de tabuada, corridas no recreio e amizades que começaram com um simples "quer brincar?". Aprendi que errar não era vergonha, que cada lição de casa concluída era um degrau a mais. Aquele menino com medo na porta da sala já não existia mais agora eu sabia quem eu era e para onde queria ir.' },
    { fase:'ensino-medio', ano:'2024-2026', titulo:'O último sinal', img: 'assets/img/WhatsApp Image 2026-11-22 at 12.05.50 (2).jpeg', texto:'O último sinal ainda não tocou, mas sinto ele perto. Cada prova, cada redação, cada noite mal dormida está me levando para aquele momento. Ainda sou aquele estudante de mochila nas costas, caminhando pelos corredores, mas já vejo o fim da linha se aproximando. Não é um adeus ainda é a reta final, o último trecho antes de tudo mudar. E enquanto o sinal não chega, levo comigo cada lição, cada risada no recreio e cada desafio que me tornou quem sou hoje.' }
  ];

  const esc = t => { const d=document.createElement('div'); d.textContent=t; return d.innerHTML; };
  const gridMem = document.getElementById('memorias-grid');
  const gridRed = document.getElementById('redacoes-grid');

  // ==========================================
  // 2. CURSOR CUSTOMIZADO E PROGRESSO DE LEITURA
  // ==========================================
  const cursor = document.getElementById('custom-cursor');
  const progressBar = document.getElementById('progress-bar');
  const bgGlow1 = document.querySelector('.bg-glow-1');
  const bgGlow2 = document.querySelector('.bg-glow-2');

  document.addEventListener('mousemove', (e) => {
    // Cursor
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    
    // Parallax sutil nos glows de fundo
    const x = (e.clientX / window.innerWidth - 0.5) * 40;
    const y = (e.clientY / window.innerHeight - 0.5) * 40;
    if(bgGlow1) bgGlow1.style.transform = `translate(${x}px, ${y}px)`;
    if(bgGlow2) bgGlow2.style.transform = `translate(${-x}px, ${-y}px)`;
  });

  // Hover do cursor
  const interactiveElements = document.querySelectorAll('a, button, input, .redacao, .memoria');
  interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('hovering'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('hovering'));
  });

  // Scroll Progress
  window.addEventListener('scroll', () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    if(progressBar) progressBar.style.width = scrolled + '%';
  });

  // ==========================================
  // 3. RENDERIZAÇÃO E EFEITOS (MEMÓRIAS)
  // ==========================================
  function renderMemorias(){
    gridMem.innerHTML='';
    MEMORIAS.forEach(m=>{
      const el=document.createElement('article');
      el.className='memoria reveal';
      el.innerHTML=`
        <div class="img-wrapper">
          <img src="${m.img}" alt="${m.titulo}" onerror="this.src='https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1000&auto=format&fit=crop'">
        </div>
        <div class="memoria-content">
          <span class="ano">${esc(m.ano)}</span>
          <h3>${esc(m.titulo)}</h3>
          <p>${esc(m.texto)}</p>
        </div>
      `;
      
      // Efeito Spotlight (Holofote) seguindo o mouse no card
      el.addEventListener('mousemove', e => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        el.style.setProperty('--mouse-x', `${x}px`);
        el.style.setProperty('--mouse-y', `${y}px`);
      });

      gridMem.appendChild(el);
    });
  }
  renderMemorias();

  // ==========================================
  // 4. RENDERIZAÇÃO E EFEITOS (REDAÇÕES)
  // ==========================================
  function renderRedacoes(busca=''){
    gridRed.innerHTML='';
    const lista = REDACOES.filter(r => !busca || r.titulo.toLowerCase().includes(busca) || r.tema.toLowerCase().includes(busca));
    
    if(!lista.length){ gridRed.innerHTML='<p class="vazio">Nenhuma redação encontrada.</p>'; return; }
    
    lista.forEach(r=>{
      const el=document.createElement('article');
      el.className='redacao reveal'; el.tabIndex=0;
      
      const titulo = busca ? esc(r.titulo).replace(new RegExp('('+busca.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')+')','gi'),'<mark>$1</mark>') : esc(r.titulo);
      
      el.innerHTML=`
        <span class="num">${String(r.id).padStart(2,'0')}</span>
        <span class="cat">Redação ${String(r.id).padStart(2,'0')} / 17</span>
        <h3>${titulo}</h3>
      `;
      
      el.addEventListener('click',()=>abrirModal(r));
      el.addEventListener('keydown',e=>{ if(e.key==='Enter'||e.key===' '){ e.preventDefault(); abrirModal(r); } });
      el.addEventListener('mouseenter', () => cursor.classList.add('hovering'));
      el.addEventListener('mouseleave', () => cursor.classList.remove('hovering'));
      
      // Efeito 3D Tilt
      el.addEventListener('mousemove', e => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -10; 
        const rotateY = ((x - centerX) / centerX) * 10;
        el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
      });
      el.addEventListener('mouseleave', () => {
        el.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        el.style.transition = 'transform 0.5s ease';
      });
      el.addEventListener('mouseenter', () => { el.style.transition = 'none'; });

      gridRed.appendChild(el);
    });
    
    // Ativar classes reveal logo após renderizar
    setTimeout(() => {
      document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    }, 50);
  }

  let timeoutBusca;
  document.getElementById('busca').addEventListener('input',e=>{
    clearTimeout(timeoutBusca);
    timeoutBusca = setTimeout(() => { renderRedacoes(e.target.value.toLowerCase().trim()); }, 300);
  });
  renderRedacoes();

  // ==========================================
  // 5. MODAL, ÁUDIO E EFEITO MÁQUINA DE ESCREVER
  // ==========================================
  const modal = document.getElementById('modal');
  const btnAudio = document.getElementById('btn-audio');
  const btnAudioTxt = btnAudio.querySelector('.txt-audio');
  const audioViz = document.getElementById('audio-viz');
  const modalTexto = document.getElementById('modal-texto');
  const synth = window.speechSynthesis;
  let utterance = null;
  let typewriterInterval = null;

  function typeWriter(text, i, fnCallback) {
    if (i < text.length) {
      modalTexto.innerHTML = text.substring(0, i+1) + '<span aria-hidden="true"></span>';
      // Rola o modal para baixo conforme digita
      const modalCard = document.querySelector('.modal-card');
      if(i % 50 === 0) modalCard.scrollTop = modalCard.scrollHeight;
      
      setTimeout(function() {
        typeWriter(text, i + 1, fnCallback)
      }, 10);
    } else if (typeof fnCallback == 'function') {
      setTimeout(fnCallback, 700);
    }
  }

  function abrirModal(r){
    document.getElementById('modal-num').textContent = String(r.id).padStart(2,'0');
    document.getElementById('modal-titulo').textContent = r.titulo;
    document.getElementById('modal-tema').textContent = r.tema;
    
    modal.classList.add('ativo');
    document.body.style.overflow = 'hidden';

    // Máquina de escrever
    modalTexto.classList.remove('concluido');
    clearTimeout(typewriterInterval);
    modalTexto.innerHTML = '';
    typeWriter(r.texto, 0, () => {
      modalTexto.classList.add('concluido');
    });

    // Setup Áudio
    if (synth) {
      synth.cancel(); // Para qualquer áudio anterior
      utterance = new SpeechSynthesisUtterance(r.texto);
      utterance.lang = 'pt-BR';
      utterance.rate = 1.1;
      
      utterance.onend = () => {
        btnAudio.classList.remove('tocando');
        btnAudioTxt.textContent = 'Ouvir Texto';
        audioViz.classList.remove('ativo');
      };
    }
  }

  function fecharModal(){ 
    modal.classList.remove('ativo'); 
    document.body.style.overflow=''; 
    clearTimeout(typewriterInterval);
    if(synth) { 
      synth.cancel(); 
      btnAudio.classList.remove('tocando'); 
      btnAudioTxt.textContent = 'Ouvir Texto'; 
      audioViz.classList.remove('ativo');
    } 
  }
  
  document.getElementById('fechar').addEventListener('click',fecharModal);
  modal.addEventListener('click',e=>{ if(e.target===modal) fecharModal(); });
  document.addEventListener('keydown',e=>{ if(e.key==='Escape'&&modal.classList.contains('ativo')) fecharModal(); });

  btnAudio.addEventListener('click', () => {
    if (!synth) return alert("Seu navegador não suporta leitura de texto.");
    if (synth.speaking) {
      synth.cancel();
      btnAudio.classList.remove('tocando');
      btnAudioTxt.textContent = 'Ouvir Texto';
      audioViz.classList.remove('ativo');
    } else {
      synth.speak(utterance);
      btnAudio.classList.add('tocando');
      btnAudioTxt.textContent = 'Parar Áudio';
      audioViz.classList.add('ativo');
    }
  });

  // ==========================================
  // 6. BOTÕES MAGNÉTICOS (Hero)
  // ==========================================
  const magneticButtons = document.querySelectorAll('.magnetic');
  magneticButtons.forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = 'translate(0px, 0px)';
    });
  });

  // ==========================================
  // 7. TEMA, SCROLL REVEAL E TOPO
  // ==========================================
  const btn=document.getElementById('tema');
  const html=document.documentElement;
  let tema=html.getAttribute('data-theme')||'dark';
  
  btn.addEventListener('click',()=>{
    tema = tema==='dark'?'light':'dark';
    html.setAttribute('data-theme',tema);
    localStorage.setItem('ftv-theme',tema);
  });

  const btnTopo = document.getElementById('btn-topo');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('ativo');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) btnTopo.classList.add('visivel');
    else btnTopo.classList.remove('visivel');
  });
  btnTopo.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  // ==========================================
  // 8. CANVAS PARTICLES
  // ==========================================
  const canvas = document.getElementById('particles-canvas');
  const ctx = canvas.getContext('2d');
  let particles = [];
  
  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  const mouse = { x: null, y: null, radius: 150 };
  window.addEventListener('mousemove', (e) => { mouse.x = e.x; mouse.y = e.y; });

  class Particle {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 1.5 + 0.5;
      this.baseX = this.x; this.baseY = this.y;
      this.density = (Math.random() * 30) + 1;
      this.speedX = Math.random() * 0.5 - 0.25;
      this.speedY = Math.random() * 0.5 - 0.25;
    }
    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      if (this.x > canvas.width || this.x < 0) this.speedX *= -1;
      if (this.y > canvas.height || this.y < 0) this.speedY *= -1;

      let dx = mouse.x - this.x;
      let dy = mouse.y - this.y;
      let distance = Math.sqrt(dx * dx + dy * dy);
      let forceDirectionX = dx / distance;
      let forceDirectionY = dy / distance;
      let maxDistance = mouse.radius;
      let force = (maxDistance - distance) / maxDistance;
      let directionX = forceDirectionX * force * this.density;
      let directionY = forceDirectionY * force * this.density;

      if (distance < mouse.radius) {
        this.x -= directionX;
        this.y -= directionY;
      }
    }
    draw() {
      ctx.fillStyle = 'rgba(255, 123, 0, 0.5)';
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  for (let i = 0; i < 100; i++) particles.push(new Particle());

  function connectParticles() {
    for (let a = 0; a < particles.length; a++) {
      for (let b = a; b < particles.length; b++) {
        let distance = ((particles[a].x - particles[b].x) * (particles[a].x - particles[b].x)) + 
                       ((particles[a].y - particles[b].y) * (particles[a].y - particles[b].y));
        if (distance < (canvas.width / 10) * (canvas.height / 10)) {
          let opacityValue = 1 - (distance / 20000);
          ctx.strokeStyle = `rgba(255, 123, 0, ${opacityValue * 0.2})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(particles[a].x, particles[a].y);
          ctx.lineTo(particles[b].x, particles[b].y);
          ctx.stroke();
        }
      }
    }
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => { p.update(); p.draw(); });
    connectParticles();
    requestAnimationFrame(animate);
  }
  animate();
});