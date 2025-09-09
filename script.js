// Variáveis globais
let perguntas = [
  
    {
        "pergunta": "1.1) Quais  são as medidas  do campo  de jogo  de acordo  com as regras?",
        "opcoes": [
            "a) 40 x 20 metros",
            "b) 42 x 20 metros",
            "c) 38 x 18 metros",
            "d) Comprimento entre 38 e 42 metros e a largura entre 18 e 22 metros."
        ],
        "correta": 0,
        "regra": 1
    },
    {
        "pergunta": "1.2) Quais são as medidas interiores da baliza?",
        "opcoes": [
            "a) 1,92 x 2,92 metros",
            "b) 2,00 x 3,00 metros",
            "c) 2,05 x 3,05 metros",
            "d) 2,08 x 3,08 metros"
        ],
        "correta": 1,
        "regra": 1
    },
    {
        "pergunta": "1.3) Qual a largura da linha de baliza, entre os postes?",
        "opcoes": [
            "a) 5 centímetros",
            "b) 6 centímetros",
            "c) 8 centímetros",
            "d) 10 centímetros"
        ],
        "correta": 2,
        "regra": 1
    },
    {
        "pergunta": "1.4) Quais as afirmações que estão corretas sobre a área de lançamento  de saída ?",
        "opcoes": [
            "a) É constituída por um círculo com 3 metros de diâmetro.",
            "b) É constituída por um círculo com 4 metros de diâmetro.",
            "c) A área de lançamento de saída pode ser de uma cor diferente do campo jogo.",
            "d) A área de lançamento de saída pode ser uma linha circular.",
            "e) A área de lançamento é obrigatória para todos os eventos de andebol."
        ],
        "correta": [
            1,
            2,
            3
        ],
        "regra": 1
    },
    {
        "pergunta": "2.1) O guarda-redes nº. 1 da equipa BRANCA defende um remate e a bola atravessa a linha de saída de baliza. O sinal automático do relógio do pavilhão soa imediatamente depois. Os árbitros apercebem-se que o jogo terminou cinco minutos mais cedo. Como os jogadores ainda se encontram em campo, o jogo é retomado com:",
        "opcoes": [
            "a) Lançamento de guarda-redes para a equipa BRANCA.",
            "b) Lance livre para a equipa BRANCA.",
            "c) Sem sinal de apito.",
            "d) Após o sinal de apito."
        ],
        "correta": [
            0,
            3
        ],
        "regra": 2
    },
    {
        "pergunta": "2.2) Após o sinal automático do relógio do pavilhão soar para o intervalo, os árbitros imediatamente percebem que a primeira parte terminou 1 minuto mais cedo. Qual a decisão correta?",
        "opcoes": [
            "a) Prolongar a segunda parte em um minuto.",
            "b) O minuto está perdido e não pode ser compensado.",
            "c) Após o intervalo, primeiro jogar um minuto nos mesmos lados do campo, como na primeira parte, então mudar de lados de campo e começa a segunda parte normalmente.",
            "d) Manter os jogadores no campo e jogar o minuto restante antes do intervalo"
        ],
        "correta": 3,
        "regra": 2
    },
    {
        "pergunta": "2.3) O jogador nº. 11 da equipa BRANCA remata à baliza. O guarda-redes nº. 1 da equipa PRETA agarra a bola. Nesse preciso momento, o relógio do pavilhão soa. Os árbitros informam o cronometrista que faltam jogar 30 segundos da segunda parte do jogo. Todos os jogadores ainda estão em campo. Como deve o jogo ser reiniciado?",
        "opcoes": [
            "a) Lance livre para a equipa PRETA",
            "b) Lançamento de guarda-redes para a equipa PRETA",
            "c) Lance livre para a equipa BRANCA",
            "d) Após o sinal de apito",
            "e) Sem sinal de apito"
        ],
        "correta": [
            1,
            3
        ],
        "regra": 2
    },
    {
        "pergunta": "2.4) A equipa BRANCA vai executar um lançamento livre após o apito final. Para o efeito, primeiro, o jogador nº. 3 da equipa BRANCA e depois o Jogador nº. 4 da equipa BRANCA, deixam o campo para serem substituídos por, primeiro, o jogador nº. 5 da equipa BRANCA e depois o jogador nº. 6 da equipa BRANCA, que entram em campo. Qual das seguintes afirmações é / são corretas?",
        "opcoes": [
            "a) O cronometrista apita e indica uma substituição irregular da equipa BRANCA",
            "b) Exclusão de 2 minutos para o jogador nº. 4 da equipa BRANCA por causa de uma falta na substituição.",
            "c) Exclusão de 2 minutos para o jogador nº. 6 da equipa BRANCA por causa de uma falta na substituição.",
            "d) Não há nenhuma razão para o cronometrista apitar.",
            "e) Lançamento livre para a equipa BRANCA.",
            "f) Lançamento livre para a equipa PRETA."
        ],
        "correta": [
            0,
            2,
            4
        ],
        "regra": 2
    },
    {
        "pergunta": "2.5) Um lançamento livre para a equipa PRETA é executado como um remate direto à baliza, pouco tempo antes do final do jogo. O sinal automático do relógio do pavilhão soa pouco antes da bola entrar na baliza. Qual decisão correta?",
        "opcoes": [
            "a) Final do jogo.",
            "b) O lançamento livre para a equipa PRETA deve ser repetido sem o sinal do apito.",
            "c) O lançamento livre para a equipa PRETA deve ser repetido após o sinal do apito.",
            "d) Livre de 7 metrospara a equipa PRETA"
        ],
        "correta": 2,
        "regra": 2
    },
    {
        "pergunta": "2.6) Pouco antes do fim do jogo, o jogador nº. 2 da equipa PRETA recebe a bola junto à linha da área de baliza da equipa BRANCA e tem uma clara oportunidade de golo. Ele tenta marcar, mas é impedido por uma falta. Antes da bola deixar a mão do jogador nº. 2 da equipa PRETA, o sinal automático do relógio público do pavilhão soa. Qual a decisão correta?",
        "opcoes": [
            "a) Final do jogo",
            "b) Lançamento livre para a equipa PRETA",
            "c) Livre de 7 metrospara a equipa PRETA",
            "d) Final do jogo. Observações no relatório do jogo"
        ],
        "correta": 2,
        "regra": 2
    },
    {
        "pergunta": "2.7) Pouco antes do final da primeira parte, um livre de 7 metros para a equipa BRANCA ainda não foi executado. O livre de 7 metros é executado pelo jogador nº. 9 da equipa BRANCA, a bola bate na trave, atinge as costas do guarda-redes, que está de pé, adiantado 3 metros da sua baliza, e, em seguida, a bola entra na baliza. O sinal automático do relógio do pavilhão soa, quando a bola estava a voar da trave para as costas do guarda redes. Qual a decisão correta?",
        "opcoes": [
            "a) Golo.",
            "b) O livre de 7 metros é repetido.",
            "c) Intervalo; mais nenhuma decisão."
        ],
        "correta": 1,
        "regra": 2
    },
    {
        "pergunta": "2.8) Após o final do tempo regulamentar de jogo falta executar um livre  de 7 metros. Os árbitros aguardam o resultado imediato do lançamento. Qual dos árbitros deve, então, terminar o jogo?",
        "opcoes": [
            "a) O árbitro nomeado em primeiro lugar.",
            "b) Um dos dois árbitros.",
            "c) O árbitro central.",
            "d) O árbitro de baliza."
        ],
        "correta": 1,
        "regra": 2
    },
    {
        "pergunta": "2.9) Quando é que o jogo começa?",
        "opcoes": [
            "a) Quando o árbitro nomeado em primeiro lugar na convocatória apita.",
            "b) Quando a bola sai da mão do lançador que executa o lançamento de saída.",
            "c) Quando o cronometrista inicia a contagem do tempo no relógio do pavilhão.",
            "d) Após o apito dado pelo árbitro central para a execução do lançamento de saída"
        ],
        "correta": 3,
        "regra": 2
    },
    {
        "pergunta": "2.10) Para o desempate de um jogo por lançamentos de 7 metros, quem decide qual a baliza a ser utilizada?",
        "opcoes": [
            "a) A equipa que ganha o sorteio.",
            "b) A equipa que perde o sorteio.",
            "c) Os árbitros.",
            "d) O árbitro nomeado em primeiro lugar."
        ],
        "correta": 2,
        "regra": 2
    },
    {
        "pergunta": "2.11) Um lançamento livre para a equipa PRETA vai ser executado após o apito final. Antes da execução, o jogador nº. 8 da equipa BRANCA e o jogador nº. 9 da equipa BRANCA, deixam o campo ao mesmo tempo. Eles são substituídos, primeiro pelo jogador nº. 10 da equipa BRANCA e imediatamente depois pelo jogador nº. 11 da equipa BRANCA. Qual das seguintes afirmações é / são corretas?",
        "opcoes": [
            "a) O cronometrista apita e indica aos árbitros que houve uma substituição irregular cometida pela equipa BRANCA.",
            "b) Exclusão de 2 minutos para o jogador nº. 10 da equipa BRANCA devido à falta na substituição.",
            "c) Exclusão de 2 minutos para o jogador nº. 11 da equipa BRANCA devido à falta na substituição.",
            "d) O cronometrista não deve apitar, já que não há violação da regra.",
            "e) O jogador nº. 11 da equipa BRANCA tem de voltar para a zona de substituições; o jogador nº. 8 da equipa BRANCA ou o jogador nº. 9 da equipa BRANCA podem reentrar em campo"
        ],
        "correta": [
            0,
            1,
            4
        ],
        "regra": 2
    },
    {
        "pergunta": "2.12) Pouco antes do fim da primeira parte, o jogador nº. 7 da equipa BRANCA, agride o jogador nº. 5 da equipa PRETA e impede uma clara oportunidade de golo. O sinal automático soa antes que os árbitros tivessem tempo para apitar. Qual a decisão correta?",
        "opcoes": [
            "a) A primeira parte terminou; sem sanção progressiva para o jogador nº. 7 da equipa BRANCA",
            "b) A primeira parte terminou; sem lançamento livre ou livre de 7 metros.",
            "c) Desqualificação do jogador nº. 7 da equipa BRANCA; Relatório escrito (cartões vermelho e azul mostrados pelos árbitros).",
            "d) Livre de 7 metros para a equipa PRETA.",
            "e) Desqualificação do jogador nº. 7 da equipa BRANCA (cartão vermelho mostrado pelos árbitros)."
        ],
        "correta": [
            2,
            3
        ],
        "regra": 2
    },
    {
        "pergunta": "2.13) Até quando podem os árbitros anular um golo que já foi validado?",
        "opcoes": [
            "a) Até ao apito para o lançamento de saída.",
            "b) Até ao apito final.",
            "c) Deve ser anulado se foi marcado após o cronometrista interromper o jogo e também se o lançamento de saída foi feito antes da interrupção ter sido notada.",
            "d)Nunca pode ser anulado."
        ],
        "correta": [
            0,
            2
        ],
        "regra": 2
    },
    {
        "pergunta": "2.14) Os árbitros acabaram de conceder uma reposição de bola em jogo para a equipa BRANCA. Em simultaneo, o oficial A da equipa BRANCA pede um tempo de paragem de equipa. Qual das seguintes afirmações é / são corretas?",
        "opcoes": [
            "a) O tempo de paragem de equipa não é possível pois a bola não está em jogo.",
            "b) O cronometrista apita, pára o relógio e mostra o sinal manual nº. 15.",
            "c) Os árbitros confirmam o tempo de paragem de equipa para a equipa BRANCA.",
            "d) O secretário aponta o tempo de paragem de equipa no boletim de jogo."
        ],
        "correta": [
            1,
            2,
            3
        ],
        "regra": 2
    },
    {
        "pergunta": "2.15) Em quais das seguintes situações é o time-out obrigatório?",
        "opcoes": [
            "a) Livre de 7 metros.",
            "b) Exclusão de 2 minutos.",
            "c) Influência externa.",
            "d) Desqualificação"
        ],
        "correta": [
            1,
            3
        ],
        "regra": 2
    },
    {
        "pergunta": "2.16) O jogador nº. 9 da equipa BRANCA remata à baliza. O guarda-redes nº. 12 da equipa PRETA agarra a bola. Nessa altura o cronometrista apita para terminar o jogo. Os árbitros indicam ao cronometrista que ainda há 30 segundos por jogar na 2ª parte. Todos os jogadores estão ainda em campo. Como deve o jogo ser reiniciado?",
        "opcoes": [
            "a) Lançamento livre para a equipa PRETA",
            "b) Lançamento de baliza para a equipa PRETA",
            "c) Lançamento livre para a equipa BRANCA",
            "d) Após o sinal do apito"
        ],
        "correta": [
            1,
            3
        ],
        "regra": 2
    },
    {
        "pergunta": "2.17) Após o tempo de jogo regulamentar ter terminado com o resultado 20 – 20, o jogo deve ser prolongado até que exista um vencedor. Qual a decisão correta?",
        "opcoes": [
            "a) Um minuto de intervalo antes do início do prolongamento.",
            "b) Cinco minutos de intervalo antes do início do prolongamento.",
            "c) Um minuto de intervalo no final da primeira parte do prolongamento.",
            "d) Cinco minutos de intervalo no final da primeira parte do prolongamento."
        ],
        "correta": [
            1,
            2
        ],
        "regra": 2
    },
    {
        "pergunta": "2.18) Em qual das seguintes situações é obrigatório um time-out?",
        "opcoes": [
            "a) Exclusão de 2 minutos.",
            "b) Lançamento livre.",
            "c) Jogo passivo.",
            "d) Substituição irregular.",
            "e) Advertência.",
            "f) Lançamento de reposição da bola em jogo."
        ],
        "correta": [
            0,
            3
        ],
        "regra": 2
    },
    {
        "pergunta": "2.19) Quem é que não está autorizado a participar no desempate por lançamentos de 7 metros, quando o jogo ainda continua empatado, após o prolongamento?",
        "opcoes": [
            "a) Um jogador que insulta os árbitros logo após acabar o prolongamento.",
            "b) Os guarda-redes.",
            "c) Um jogador cuja exclusão de 2 minutos não tinha expirado no final do prolongamento.",
            "d) Um jogador desqualificado.",
            "e) Um jogador que recebeu assistência médica em campo e ainda não esteve fora durante os respetivos 3 ataques da sua equipa."
        ],
        "correta": [
            0,
            2,
            3
        ],
        "regra": 2
    },
    {
        "pergunta": "2.20) O guarda-redes nº. 12 da equipa BRANCA defende um remate 5 segundos antes do final do jogo. A bola bate no teto do pavilhão, por cima da área de baliza. O sinal automático do pavilhão soa imediatamente antes da reposição de bola em jogo ser executada pela equipa PRETA. Qual a decisão correta?",
        "opcoes": [
            "a) Reposição de bola em jogo para a equipa PRETA depois do sinal do apito.",
            "b) Time-out.",
            "c) O jogo acabou.",
            "d) Aguardar o resultado da execução da reposição de bola em jogo, depois o jogo acaba."
        ],
        "correta": 2,
        "regra": 2
    },
    {
        "pergunta": "2.21) O Jogador nº. 8 da equipa PRETA já recebeu uma advertência. Durante um tempo de paragem equipa, ele senta se no banco e faz comentários sobre os árbitros de uma maneira antidesportiva. Qual a decisão correta?",
        "opcoes": [
            "a) Desqualificação do jogador da equipa Jogador nº. 8 da equipa PRETA (cartão vermelho mostrado pelos árbitros).",
            "b) Exclusão de 2 minutos para o jogador da equipa Jogador nº. 8 da equipa PRETA.",
            "c) Advertência para o jogador nº. 8 da equipa PRETA.",
            "d) Nenhuma ação é possível.",
            "e) A equipa PRETA será reduzida em um jogador em campo durante 2 minutos depois do reinício do jogo, após o tempo de paragem de equipa."
        ],
        "correta": [
            1,
            4
        ],
        "regra": 2
    },
    {
        "pergunta": "2.22) Quem tem direito a participar num desempate por lançamentos de 7 metros?",
        "opcoes": [
            "a) Todos os jogadores que estão incluídos no boletim de jogo.",
            "b) Os jogadores que não receberam uma desqualificação.",
            "c) Os jogadores que não estavam a cumprir exclusões de 2 minutos, quando o prolongamento expirou.",
            "d) Os jogadores que tenham recebido autorização dos árbitros."
        ],
        "correta": [
            1,
            2
        ],
        "regra": 2
    },
    {
        "pergunta": "2.23) Um lançamento livre ainda tem que ser executado após o sinal final automático do relógio do pavilhão. O jogador nº. 9 da equipa PRETA ocupa uma posição correta para a execução do livre e remata à baliza. Quando a bola sai da mão do jogador nº. 9 da equipa PRETA há um apito por parte do cronometrista. A bola entra na baliza, sem qualquer hipótese para o guarda-redes nº. 1 da equipa BRANCA. O cronometrista informa os árbitros que o jogador nº. 7 da equipa BRANCA, que estava em campo a defender na altura da execução do lançamento livre, tinha entrado em campo para substituir o jogador nº. 6 da equipa BRANCA, pouco antes do lançamento livre ter sido executado. Qual a decisão correta?",
        "opcoes": [
            "a) Exclusão de 2 minutos para o jogador nº. 7 da equipa BRANCA.",
            "b) Desqualificação do jogador nº. 7 da equipa BRANCA (cartão vermelho mostrado pelos árbitros).",
            "c) Golo para a equipa PRETA.",
            "d) Livre de 7 metrospara a equipa PRETA.",
            "e) Repetição do lançamento livre para a equipa PRETA depois do sinal do apito"
        ],
        "correta": [
            0,
            4
        ],
        "regra": 2
    },
    {
        "pergunta": "2.24) O jogo ainda está empatado depois do prolongamento e os regulamentos exigem uma decisão por lançamentos de 7 metros. O jogador nº. 7 da equipa BRANCA foi sancionado com exclusão de 2 minutos quando decorriam 9 minutos do último prolongamento. Ele é nomeado pelo oficial da equipa para participar na marcação dos lançamentos de 7 metros. Qual a decisão correta?",
        "opcoes": [
            "a) O jogador nº. 7 da equipa BRANCA está autorizado a participar.",
            "b) O jogador nº. 7 da equipa BRANCA não está autorizado a participar."
        ],
        "correta": 1,
        "regra": 2
    },
    {
        "pergunta": "2.25) Quando é que um time-out é obrigatório?",
        "opcoes": [
            "a) Quando um oficial da equipa recebe uma exclusão de 2 minutos.",
            "b) Quando um jogador recebe a sua terceira exclusão de 2 minutos.",
            "c) Após conduta antidesportiva repetida.",
            "d) Quando os árbitros são obrigados a efetuar o protocolo de conferência para chegar a uma decisão conjunta.",
            "e) Depois de uma conduta antidesportiva grosseira.",
            "f) Após um cartão amarelo ser mostrado a um oficial da equipa"
        ],
        "correta": [
            0,
            1,
            2,
            3,
            4
        ],
        "regra": 2
    },
    {
        "pergunta": "2.26) Pouco antes do fim da primeira parte, o jogador nº. 7 da equipa BRANCA agride o jogador nº. 5 da equipa PRETA, que perde assim uma clara hipótese de golo. O sinal automático do relógio do pavilhão soa antes que os árbitros tenham tempo para apitar. Qual a decisão correta?",
        "opcoes": [
            "a) A primeira parte terminou; nenhuma outra ação",
            "b) Desqualificação do jogador nº. 7 da equipa BRANCA, sem relatório escrito (cartão vermelho mostrado pelos árbitros).",
            "c) Livre de 7 metrospara a equipa PRETA.",
            "d) Lançamento livre para a equipa PRETA.",
            "e) Desqualificação do jogador nº. 7 da equipa BRANCA. Relatório escrito (cartões vermelhoe azul mostrados pelos árbitros).",
            "f) A equipa BRANCA vai ser reduzida em um jogador em campo durante 2 minutos a partir do início da segunda parte."
        ],
        "correta": [
            2,
            4,
            5
        ],
        "regra": 2
    },
    {
        "pergunta": "2.27) Após o apito para o intervalo, um lançamento livre ainda deve ser executado. Que jogadores ainda podem ser substituídos?",
        "opcoes": [
            "a) Todos os jogadores de ambas as equipas.",
            "b) Apenas os jogadores da equipa que defende.",
            "c) Apenas os jogadores da equipa atacante.",
            "d) Apenas um jogador da equipa que ataca.",
            "e) Um jogador de campo da equipa que defende por um guarda-redes, se a equipa, no momento do apito para o intervalo, estiver a jogar sem guarda-redes."
        ],
        "correta": [
            3,
            4
        ],
        "regra": 2
    },
    {
        "pergunta": "2.28) Que posições devem assumir os jogadores durante a execução de um lance livre a executar após o apito final?",
        "opcoes": [
            "a) Todos os colegas de equipa do lançador devem estar fora da linha de lance livre dos adversários.",
            "b) Todos os colegas de equipa do lançador devem estar em sua própria metade da quadra.",
            "c) Os adversários devem estar a 3 metros de distância do executante ou na sua própria linha de área de golo.",
            "d) Todos os colegas de equipa do lançador devem estar a pelo menos 3 metros de distância do lançador.",
            "e) Todos os colegas de equipa do executante podem ficar juntamente com o o mesmo na linha de lance livre dos adversários"
        ],
        "correta": [
            0,
            2,
            3
        ],
        "regra": 2
    },
    {
        "pergunta": "2.29) O jogador nº. 7 da equipa BRANCA passa a bola ao jogador nº. 8 da sua equipa. Nesse momento, o cronometrista apita para tempo de paragem de equipa para a equipa BRANCA. Os árbitros e os jogadores não ouviram o apito e o jogador nº. 8 da equipa BRANCA passa a bola para o jogador nº. 10 da equipa BRANCA que tem uma clara oportunidade de marcar golo. O jogador nº. 10 da equipa BRANCA sofre falta do jogador nº. 5 da equipa PRETA. Os árbitros assinalam um livre de 7 metrospara a equipa BRANCA e uma exclusão de 2 minutos para o jogador nº. 5 da equipa PRETA. Então, pela primeira vez os árbitros apercebem-se que o cronometrista já apitou por causa do pedido de tempo de paragem de equipa. Qual a decisão correta?",
        "opcoes": [
            "a) Livre de 7 metrospara a equipa BRANCA.",
            "b) Exclusão de 2 minutos para o jogador nº. 5 da equipa PRETA.",
            "c) Tempo de paragem de equipa para a equipa BRANCA.",
            "d) Lançamento de baliza para a equipa PRETA.",
            "e) Sinal do apito para recomeçar.",
            "f) Recomeçar o jogo com um lançamento livre para a equipa BRANCA na posição em que se encontrava o jogador nº. 7 da equipa BRANCA, no momento do apito do cronometrista."
        ],
        "correta": [
            1,
            2,
            4,
            5
        ],
        "regra": 2
    },
    {
        "pergunta": "2.30) O sinal do apito para o fim da primeira parte soou um minuto mais cedo. No momento do apito nenhuma das equipas estava na posse da bola e não houve violação das regras. A bola estava caída, no terreno de jogo. Ambas as equipas ainda estão no campo. Qual a decisão correta?",
        "opcoes": [
            "a) O minuto não é jogado",
            "b) O minuto é jogado antes do intervalo",
            "c) O minuto é jogado após o intervalo, antes do início da segunda parte",
            "d) Um minuto adiciona-se à segunda parte",
            "e) É decidido através de um sorteio, qual a equipa que recebe a bola, quando o jogo recomeçar.",
            "f) A equipa que em último estava na posse da bola recebe a bola quando o jogo começar novamente."
        ],
        "correta": [
            1,
            5
        ],
        "regra": 2
    },
    {
        "pergunta": "2.31) A primeira parte do jogo terminou um minuto mais cedo. Não houve nenhuma violação das regras e a bola estava no ar sobre a área de baliza. O guarda-redes agarra a bola após o apito. Ambas as equipas ainda estão em campo. Qual a decisão correta?",
        "opcoes": [
            "a) O minuto não é jogado.",
            "b) O minuto é jogado antes do intervalo.",
            "c) O minuto é jogado após o intervalo, antes do início do segundo parte.",
            "d) Adiciona-se um minuto à segunda parte.",
            "e) A equipa que em último estava na posse da bola recebe a bola quando o jogo começar novamente.",
            "f) O jogo é retomado com um lançamento de baliza"
        ],
        "correta": [
            1,
            4
        ],
        "regra": 2
    },
    {
        "pergunta": "2.32) A primeira parte do jogo acabou um minuto mais cedo. Não houve nenhuma violação das regras e a bola estava no ar sobre a área de baliza. Após o apito, a bola passou por cima da linha de saída de baliza. Ambas as equipas ainda estão em campo. Qual a decisão correta?",
        "opcoes": [
            "a) O minuto não é jogado.",
            "b) O minuto é jogado antes do intervalo.",
            "c) O minuto é jogado após o intervalo, antes do início da segunda parte.",
            "d) Adiciona-se um minuto à segunda parte.",
            "e) A equipa que estava na posse da bola recebe a bola quando o jogo começa novamente.",
            "f) O jogo é retomado com um lançamento de baliza."
        ],
        "correta": [
            1,
            4
        ],
        "regra": 2
    },
    {
        "pergunta": "2.33) A equipa BRANCA marcou um golo e a equipa PRETA quer executar o lançamento de saída rapidamente. Portanto, o jogador nº. 5 da equipa PRETA, rapidamente dribla a bola na direção da linha central. Ao fazer isso ele passa pelo jogador nº. 3 da equipa BRANCA, que usa uma mão aberta para jogar a bola para longe do jogador nº. 5 da equipa PRETA, fazendo a bola bater no pé do jogador nº. 5 da equipa PRETA e rolar para longe, atravessando a linha central para o meio campo da equipa BRANCA. Qual a decisão correta?",
        "opcoes": [
            "a) Time-out",
            "b) Lançamento de saída para a equipa PRETA",
            "c) Sanção progressiva para o jogador nº. 3 da equipa BRANCA",
            "d) Lançamento livre para a equipa BRANCA",
            "e) Exclusão directa de 2 minutos ao jogador nº. 3 da equipa BRANCA."
        ],
        "correta": [
            0,
            1,
            4
        ],
        "regra": 2
    },
    {
        "pergunta": "2.34) Em que situações é que um time-out NÃO é obrigatório?",
        "opcoes": [
            "a) Quando a bola sai para longe do campo.",
            "b) Quando o cronometrista apita.",
            "c) Quando um jogador parece lesionado.",
            "d) Quando os árbitros indicam direções contrárias, ao tomarem uma decisão.",
            "e) Quando existe uma substituição de um jogador de campo por um guarda-redes para executar um lançamento de baliza"
        ],
        "correta": [
            0,
            2,
            4
        ],
        "regra": 2
    },
    {
        "pergunta": "2.35) Quem pode solicitar um tempo de paragem de equipa?",
        "opcoes": [
            "a) Um dos oficiais da equipa.",
            "b) Um jogador.",
            "c) Apenas o oficial responsável da equipa.",
            "d) O capitão da equipa."
        ],
        "correta": 0,
        "regra": 2
    },
    {
        "pergunta": "2.36) Qual das seguintes afirmações sobre o tempo de paragem de equipa é / são  corretas?",
        "opcoes": [
            "a) O tempo de paragem de equipa só pode ser solicitado pelo oficial responsável da equipa",
            "b) Se um tempo de paragem de equipa é solicitado quando os adversários estão na posse da bola, o cronometrista deve devolver o cartão verde ao oficial da equipa",
            "c) O tempo de 1 minuto para o tempo de paragem de equipa começa quando o cronometrista apitar",
            "d) A violação das regras durante um tempo de paragem de equipa tem as mesmas consequências que durante o jogo",
            "e) Após o tempo de paragem de equipa, o jogo é sempre retomado com um lançamento para a equipa que pediu o tempo de paragem de equipa"
        ],
        "correta": [
            1,
            3,
            4
        ],
        "regra": 2
    },
    {
        "pergunta": "2.37) A equipa BRANCA está na posse da bola. O oficial C da equipa PRETA pede um time-out de equipa colocando o cartão verde na mesa, em frente ao cronometrista. Qual a decisão correta?",
        "opcoes": [
            "a) O cartão verde é colocado em cima da mesa.",
            "b) O cronometrista apita assim que a equipa PRETA ganhar a posse da bola.",
            "c) O cronometrista devolve o cartão verde ao oficial.",
            "d) Apenas o oficial responsável da equipa pode pedir um tempo de equipa."
        ],
        "correta": 2,
        "regra": 2
    },
    {
        "pergunta": "2.38) O jogador nº. 3 da equipa PRETA tenta rematar à baliza. No entanto a bola para no chão da área de baliza sem ter sido tocada por qualquer outro jogador. Nesse momento o oficial responsável da equipa PRETA pede um tempo de paragem de equipa. Qual a decisão correta?",
        "opcoes": [
            "a) O cronometrista apita, para o relógio ao mesmo tempo, e indica aos árbitros o tempo de paragem de equipa para a equipa PRETA",
            "b) O cronometrista devolve o cartão verde ao oficial responsável da equipa PRETA",
            "c) O jogo é retomado com um lançamento livre para a equipa PRETA",
            "d) Lançamento de baliza para a equipa BRANCA"
        ],
        "correta": [
            1,
            3
        ],
        "regra": 2
    },
    {
        "pergunta": "2.39) O guarda-redes nº. 1 da equipa BRANCA passa a bola para o jogador nº. 8 da equipa BRANCA, que está sozinho com o guarda-redes nº. 12 da equipa PRETA na área de baliza da equipa PRETA. Pouco antes da bola chegar ao jogador nº. 8 da equipa  BRANCA, há um sinal de apito do cronometrista: O oficial A da equipa BRANCA pediu um tempo de paragem de equipa nessa altura. Como deve o jogo ser recomeçado?",
        "opcoes": [
            "a) Lançamento livre para a equipa BRANCA fora da área de baliza da equipa BRANCA",
            "b) Lançamento livre para a equipa BRANCA na área de substituição da equipa BRANCA",
            "c) Livre de 7 metros para a equipa BRANCA",
            "d) Lançamento livre para a equipa BRANCA na linha de lançamento livre da equipa PRETA"
        ],
        "correta": 3,
        "regra": 2
    },
    {
        "pergunta": "2.40) O Jogador nº. 4 da equipa BRANCA bloqueia um remate do jogador nº. 11 da equipa PRETA. A bola toca no teto do pavilhão, acima da área de baliza. Imediatamente a seguir, o oficial responsável da equipa PRETA coloca o cartão verde na mesa em frente ao cronometrista. Qual a decisão correta?",
        "opcoes": [
            "a) A equipa PRETA recebe imediatamente o time-out de equipa.",
            "b) A equipa PRETA não recebe o time-out de equipa porque a bola tocou o teto.",
            "c) A equipa PRETA não recebe o time-out de equipa porque a equipa BRANCA tem a posse da bola quando o jogo é reiniciado.",
            "d) A equipa PRETA recebe o time-out de equipa, mas só depois do jogo ser reiniciado."
        ],
        "correta": 0,
        "regra": 2
    },
    {
        "pergunta": "2.41) A equipa BRANCA está na posse da bola e pede um time-out de equipa. Devido ao barulho os árbitros não ouvem o apito do cronometrista. Só após cerca de 10 segundos, quando a equipa PRETA está na posse da bola, os árbitros se apercebem da interrupção. Qual a decisão correta?",
        "opcoes": [
            "a) O time-out de equipa é concedido.",
            "b) O jogo é retomado com um lançamento livre para a equipa PRETA.",
            "c) O tempo de paragem de equipa não é concedido.",
            "d) O jogo é retomado com um lançamento livre para a equipa BRANCA."
        ],
        "correta": [
            0,
            3
        ],
        "regra": 2
    },
    {
        "pergunta": "2.42) Ao minuto 78:00, o jogador nº. 7 da equipa BRANCA recebe uma exclusão de 2 minutos. Mais tarde, o jogo acaba empatado e os regulamentos exigem uma decisão por lançamentos de 7 metros. O jogador nº. 7 da equipa BRANCA, é nomeado pelo oficial responsável da equipa a participar nos lançamentos de 7 metros. O jogador nº. 7 da equipa BRANCA executa livre de 7 metros e marca um golo. Qual a decisão correta?",
        "opcoes": [
            "a) O golo é validado. O jogador nº. 7 da equipa BRANCA está autorizado a participar.",
            "b) O golo não é validado. O jogador nº. 7 da equipa BRANCA não está autorizado a participar.",
            "c) O livre de 7 metros é considerado como falhado.",
            "d) Desqualificação para o jogador nº. 7 da equipa BRANCA."
        ],
        "correta": 0,
        "regra": 2
    },
    {
        "pergunta": "2.43) Ao minuto 55:00, o oficial responsável da equipa BRANCA pede um time-out de equipa, que é o segundo no jogo para a sua equipa. Ao minuto 59:00, o mesmo oficial pede o 3º time-out de equipa para a equipa BRANCA. Qual a decisão correta?",
        "opcoes": [
            "a) O time-out de equipa é possível.",
            "b) O time-out de equipa não é possível."
        ],
        "correta": 1,
        "regra": 2
    },
    {
        "pergunta": "2.44) A equipa BRANCA está no ataque. O oficial A da equipa BRANCA quer pedir um time out de equipa e vai até a mesa para colocar o cartão verde. O cartão verde é colocado na mesa em frente ao cronometrista. Ao mesmo tempo, o jogador nº. 4 da equipa BRANCA remata à baliza e consegue marcar. O cronometrista apita para o time out de equipa, logo após a bola passar a linha de golo da equipa PRETA. Qual é a decisão correta?",
        "opcoes": [
            "a) Golo para a equipa BRANCA.",
            "b) O golo não é válido, porque a equipa BRANCA solicitou um time out de equipa.",
            "c) Time-out de equipa para a equipa BRANCA.",
            "d) Sem time-out de equipa para a equipa BRANCA, porque já não estão na posse da bola.",
            "e) O cartão verde deve ser devolvido à equipa.",
            "f) Lançamento de saída para a equipa PRETA."
        ],
        "correta": [
            0,
            3,
            4,
            5
        ],
        "regra": 2
    },
    {
        "pergunta": "2.45) A equipa BRANCA pediu o seu 2º time out de equipa ao minuto 55:10. Ao minuto 59:25, o oficial A da equipa BRANCA quer solicitar um terceiro time out de equipa e coloca o cartão verde na mesa na frente do cronometrista. A equipa BRANCA está na posse da bola. O cronometrista apita e pára o relógio. Então assinala um time out de equipa para a equipa BRANCA. Qual é a decisão correta?",
        "opcoes": [
            "a) Time-out de equipa para a equipa BRANCA.",
            "b) Nenhum time-out de equipa concedido.",
            "c) Sanção progressiva para o oficial A da equipa BRANCA.",
            "d) A partida é retomada com um lançamento livre para a equipa BRANCA.",
            "e) A partida é retomada com um lançamento livre para a equipa PRETA."
        ],
        "correta": [
            1,
            3
        ],
        "regra": 2
    },
    {
        "pergunta": "2.46) A equipa BRANCA deseja solicitar um time out de equipa. O oficial A da equipa BRANCA coloca o cartão verde na mesa na frente do cronometrista. Ao mesmo tempo, o jogador nº. 9 da equipa BRANCA remata à baliza da equipa PRETA. O cronometrista apita enquanto a bola está no ar. Logo após o apito, o guarda-redes nº. 12 da equipa PRETA agarra a bola. Qual é a decisão correta?",
        "opcoes": [
            "a) Sem time-out de equipa, porque a equipa BRANCA não está na posse da bola.",
            "b) Time out de equipa para a equipa BRANCA.",
            "c) O cartão verde é devolvido à equipa BRANCA.",
            "d) A partida é reiniciada com um lançamento de baliza para a equipa PRETA.",
            "e) A partida é reiniciada com um lançamento livre para a equipa BRANCA."
        ],
        "correta": [
            1,
            4
        ],
        "regra": 2
    },
    {
        "pergunta": "2.47) A equipa BRANCA deseja solicitar um time out de equipa. O oficial A da equipa BRANCA coloca o cartão verde na mesa na frente do cronometrista. Antes do cronometrista apitar para o time-out de equipa, o jogador nº. 9 da equipa BRANCA remata à baliza. O remate é defendido pelo guarda-redes nº. 12 da equipa PRETA, e o cronometrista apita, enquanto a bola está a rolar dentro da área de baliza. Qual é a decisão correta?",
        "opcoes": [
            "a) Sem time-out de equipa, porque a equipa BRANCA não está na posse da bola.",
            "b) Time out de equipa para a equipa BRANCA.",
            "c) O cartão verde é devolvido à equipa BRANCA.",
            "d) A partida é reiniciada com um lançamento de baliza para a equipa PRETA.",
            "e) A partida é reiniciada com um lançamento livre para a equipa BRANCA.",
            "f) A partida é reiniciada com um lançamento livre para a equipa PRETA."
        ],
        "correta": [
            0,
            2,
            5
        ],
        "regra": 2
    },
    {
        "pergunta": "2.48) A equipa BRANCA deseja solicitar um time out de equipa. O oficial A da equipa BRANCA coloca o cartão verde na mesa na frente do cronometrista. Antes do cronometrista apitar para o time-out de equipa, o jogador nº. 9 da equipa BRANCA remata à baliza. O remate é defendido pelo guarda-redes nº. 12 da equipa PRETA, e o cronometrista apita, enquanto a bola, após ser defendida, está no ar sobre a área de baliza. Qual é a decisão correta?",
        "opcoes": [
            "a) Sem time-out de equipa, porque a equipa BRANCA não está na posse da bola.",
            "b) Time out de equipa para a equipa BRANCA.",
            "c) O cartão verde é devolvido à equipa BRANCA.",
            "d) A partida é reiniciada com um lançamento de baliza para a equipa PRETA.",
            "e) A partida é reiniciada com um lançamento livre para a equipa BRANCA.",
            "f) A partida é reiniciada com um lançamento livre para a equipa PRETA."
        ],
        "correta": [
            1,
            4
        ],
        "regra": 2
    },
    {
        "pergunta": "2.49) A equipa BRANCA deseja solicitar um time out de equipa. O oficial A da equipa BRANCA coloca o cartão verde na mesa na frente do cronometrista. Antes do cronometrista apitar para o time-out de equipa, o jogador nº. 11 da equipa BRANCA comete uma falta ofensiva. O cronometrista apita para o time-out de equipa antes do árbitro apitar para a falta ofensiva. Qual é a decisão correta?",
        "opcoes": [
            "a) Os árbitros decidem que não haverá time-out de equipa, porque a falta ofensiva foi cometida antes do cronometrista apitar para o time-out de equipa.",
            "b) Time-out de equipa para a equipa BRANCA.",
            "c) O cartão verde é devolvido à equipa BRANCA.",
            "d) A partida é reiniciada com um lançamento livre para a equipa PRETA.",
            "e) A partida é reiniciada com um lançamento livre para a equipa BRANCA"
        ],
        "correta": [
            0,
            2,
            3
        ],
        "regra": 2
    },
    {
        "pergunta": "2.50) O time-out de equipa eletrónico, (buzzer), é usado na partida. A equipa BRANCA teve o seu segundo time-out de equipa aos 55:10. Aos 59:35, o oficial A da equipa BRANCA pretende solicitar um terceiro time-out para a sua equipa e ativa o buzzer para time-out de equipa. A bola está em jogo e a equipa BRANCA está na posse da bola. O som do marcador eletrónico soa e o cronómetro é parado. Qual é a decisão correta?",
        "opcoes": [
            "a) Time-out de equipa para a equipa BRANCA.",
            "b) Não foi concedido o time-out.",
            "c) Punição progressiva para o oficial A da equipa BRANCA.",
            "d) A partida é reiniciada com um lance livre para a equipa BRANCA.",
            "e) A partida é reiniciada com um lance livre para a equipa PRETA.",
            "f) A equipa PRETA pode escolher entre lançamento livre e livre de 7 metros."
        ],
        "correta": [
            1,
            2,
            4
        ],
        "regra": 2
    },
    {
        "pergunta": "2.51) O time-out de equipa eletrónico, (buzzer), é usado na partida. A equipa BRANCA tem a posse de bola. Aos 58:40, o jogador nº. 7 da equipa BRANCA comete uma falta ofensiva. Antes que os árbitros pudessem apitar a falta ofensiva, o sinal do cronómetro do pavilhão soa porque o oficial A da equipa BRANCA ativou o “buzzer” para solicitar um time-out de equipa. Logo em seguida os árbitros apitam falta ofensiva contra o jogador nº. 7 da equipa BRANCA. Qual é a decisão correta?",
        "opcoes": [
            "a) O time-out de equipa não é possível porque a equipa BRANCA já não está em posse da bola.",
            "b) Time-out de equipa para a equipa BRANCA.",
            "c) A equipa BRANCA perderá um time-out.",
            "d) A partida é reiniciada com um lancçamento livre para a equipa PRETA.",
            "e) A partida é reiniciada com um lançamento livre para a equipa BRANCA.",
            "f) A partida é reiniciada com um livre de 7 metros para a equipa PRETA.",
            "g) A equipa PRETA pode escolher entre lançamento livre e livre de 7 metros.",
            "h) Sanção progressiva contra o Oficial A da equipa BRANCA"
        ],
        "correta": [
            0,
            2,
            3
        ],
        "regra": 2
    },
    {
        "pergunta": "2.52) O time-out de equipa eletrónico, (buzzer), é usado na partida. Aos 29:50 da primeira parte, o jogador nº. 9 da equipa BRANCA remata à baliza. O remate é defendido pelo Guarda-redes nº. 12 da equipa PRETA, e após a defesa, a bola paira no ar por cima da área de baliza. Nesse momento, o sinal do cronómetro do pavilhão soa devido ao Oficial A da equipa PRETA ter ativado o “buzzer” para solicitar um time-out de equipa. Qual é a decisão correta?",
        "opcoes": [
            "a) Nenhum time-out é possível porque a equipa PRETA não tem a posse de bola.",
            "b) Time-out de equipa para a equipa PRETA.",
            "c) A equipa PRETA perderá um Time-out de equipa.",
            "d) A partida é reiniciada com um lançamento de baliza para a equipa PRETA.",
            "e) A partida é reiniciada com um lançamento livre para a equipa BRANCA.",
            "f) A partida é reiniciada com um lançameto livre para a equipa PRETA.",
            "g) A equipa BRANCA pode escolher entre um livre de 7 metros e um lançamento livre.",
            "h) A partida é reiniciada com um livre de 7 metros para a equipa BRANCA.",
            "i) Sanção progressiva aplicada ao Oficial A da equipa PRETA"
        ],
        "correta": [
            0,
            2,
            7,
            8
        ],
        "regra": 2
    },
    {
        "pergunta": "2.53) A Equipa PRETA está no ataque. Os árbitros mostram o sinal de jogo passivo. Depois de dois passes soa um apito do delegado porque o Oficial A da equipa PRETA solicitou um time-out de equipa. Nem os árbitros nem os jogadores ouvem o apito e o jogo prossegue. O quarto passe da equipa PRETA vai para o ponta que tem uma clara oportunidade de golo. O ponta salta para efectuar um remate à baliza. Ao fazer isso, ele é empurrado pelo jogador nº. 4 da equipa BRANCA e perde parcialmente o controlo do corpo. O Guarda-Redes defende o remate. Só nessa altura os árbitros e os jogadores se apercebem de que o delegado interrompeu o jogo por causa do pedido de time-out de equipa. Qual é a decisão correta?",
        "opcoes": [
            "a) Time-out da equipa PRETA.",
            "b) A partida é reiniciada com um lance livre para a equipa PRETA.",
            "c) A partida é reiniciada com um livre de 7 metrospara a equipa PRETA.",
            "d) Suspensão de 2 minutos para o jogador nº. 4 da equipa BRANCA.",
            "e) Nenhuma sanção é possível.",
            "f) O sinal de aviso de jogo passivo ainda é válido - a equipa PRETA completou dois passes.",
            "g) O sinal aviso de jogo passivo ainda é válido – a equipa PRETA completou quatro passes.",
            "h) O sinal de aviso de jogo passivo deixa de ser válido porque o jogador nº. 4 da equipa BRANCA é punido com uma suspensão de 2 minutos."
        ],
        "correta": [
            0,
            1,
            3,
            5
        ],
        "regra": 2
    },
    {
        "pergunta": "2.54) A Equipa BRANCA remata à baliza. O guarda-redes nº. 1 da equipa PRETA defende o remate. A bola está a saltar dentro da área de baliza quando o oficial A da equipa BRANCA solicita um time-out de equipa e coloca o cartão verde na frente do cronometrista. O cronometrista apita quando a bola ainda está a saltar dentro da área de baliza, no entanto a bola está muito perto do jogador nº. 13 da equipa BRANCA, que está completamente sozinho fora da área de baliza. Qual é a decisão correta?",
        "opcoes": [
            "a) Time-out de equipa para a equipa BRANCA.",
            "b) Não é possível qualquer time-out de equipa, e o CARTÃO VERDE é devolvido ao Oficial A da equipa BRANCA.",
            "c) Lance livre para a equipa BRANCA.",
            "d) Lançamento de BALIZA para a equipa PRETA.",
            "e) Lançamento livre para a equipa PRETA.",
            "f) Livre de 7 metros para a equipa BRANCA"
        ],
        "correta": [
            0,
            2
        ],
        "regra": 2
    },
    {
        "pergunta": "3.1) Quantas cores pode ter a bola?",
        "opcoes": [
            "a) 1",
            "b) 2",
            "c) 3",
            "d) Ilimitadas."
        ],
        "correta": 3,
        "regra": 3
    },
    {
        "pergunta": "3.2) Qual destas quatro bolas devem os árbitros escolher para um jogo masculino?",
        "opcoes": [
            "a) Circunferência 57 cm, peso de 450 g",
            "b) Circunferência 58 cm, peso de 400 g",
            "c) Circunferência 59 cm, peso 425 g",
            "d) Circunferência 60 cm, peso de 500 g"
        ],
        "correta": 2,
        "regra": 3
    },
    {
        "pergunta": "3.3) Qual destas quatro bolas devem os árbitros escolher para um jogo feminino?",
        "opcoes": [
            "a) Circunferência 53 cm, peso de 350 g",
            "b) Circunferência 54 cm, peso de 300 g",
            "c) Circunferência 55 cm, peso 425 g",
            "d) Circunferência 56 cm, peso de 375 g"
        ],
        "correta": 3,
        "regra": 3
    },
    {
        "pergunta": "3.4) Os árbitros decidiram pedir a bola de reserva do jogo. Quando deve a bola original ser usada novamente?",
        "opcoes": [
            "a) Na altura da próxima interrupção de jogo.",
            "b) Não pode ser usada novamente, exceto se for impossível continuar a usar a bola de reserva.",
            "c) Quando os árbitros entenderem necessário usá-la novamente.",
            "d) Se uma das equipas solicitar"
        ],
        "correta": 2,
        "regra": 3
    },
    {
        "pergunta": "4.1) Pouco antes do início do jogo, o jogador nº. 11 da equipa BRANCA está gravemente lesionado, de forma que não consegue continuar a jogar. Qual a decisão correta?",
        "opcoes": [
            "a) O jogador nº. 11 da equipa BRANCA não pode ser substituído",
            "b) O jogador nº. 11 da equipa BRANCA pode ser substituído se os adversários aceitarem",
            "c) Normalmente, o jogador nº. 11 da equipa BRANCA pode ser substituído no boletim de jogo e o seu substituto pode usar o número 11. No entanto, os árbitros devem verificar os regulamentos de acordo com a competição em causa",
            "d) O jogador nº. 11 da equipa BRANCA pode ser substituído, mas o seu substituto não pode usar o número 11"
        ],
        "correta": 2,
        "regra": 4
    },
    {
        "pergunta": "4.2) A equipa PRETA aparece com 5 jogadores de campo. O guarda-redes não está presente no início do jogo. A equipa PRETA nomeia o jogador de campo nº.  5 como guarda-redes. Quais são as consequências para o jogador nº. 5 da equipa PRETA?",
        "opcoes": [
            "a) O jogador nº. 5 da equipa PRETA pode ser usado como um jogador de campo a qualquer momento, quando fizer uma substituição correta.",
            "b) O jogador nº. 5 da equipa PRETA já não pode ser usado como um jogador de campo",
            "c) O jogador nº. 5 da equipa PRETA pode ser usado como um jogador de campo se os oficiais da equipa BRANCA concordarem",
            "d) O jogador nº. 5 da equipa PRETA pode ser usado como um jogador de campo, assim que o guarda-redes estiver presente"
        ],
        "correta": 0,
        "regra": 4
    },
    {
        "pergunta": "4.3) Logo após o começo do jogo, o presidente do clube da equipa BRANCA senta-se no banco, na zona de substituições, com dois oficiais da equipa, o massagista e o treinador. Quais são as consequências?",
        "opcoes": [
            "a) O guarda-redes suplente deve ficar de pé, atrás do banco",
            "b) O presidente do clube deve deixar a zona de substituições",
            "c) Um dos oficiais deve deixar a zona de substituições",
            "d) Quem não estiver no boletim de jogo deve deixar a zona de substituições",
            "e) O oficial responsável da equipa recebe uma sanção progressiva"
        ],
        "correta": [
            3,
            4
        ],
        "regra": 4
    },
    {
        "pergunta": "4.4) Qual é o número mínimo de jogadores de cada equipa que deve estar presente no campo, no início do jogo, e que devem estar inscritos no boletim de jogo?",
        "opcoes": [
            "a) 5 jogadores",
            "b) 4 jogadores de campo e 1 guarda-redes",
            "c) 5 jogadores de campo e 1 guarda-redes",
            "d) 6 jogadores de campo"
        ],
        "correta": 0,
        "regra": 4
    },
    {
        "pergunta": "4.5) Quatro cenários possíveis: Quem tem direito a participar?",
        "opcoes": [
            "a) Um jogador que esteja presente no início do jogo e inscrito no boletim de jogo.",
            "b) Um jogador que não esteja presente no início do jogo, mas que esteja inscrito no boletim de jogo.",
            "c) Um jogador que esteja presente no início do jogo, mas que não esteja inscrito no boletim de jogo.",
            "d) Um jogador que tenha recebido permissão para jogar do cronometrista, mas que não esteja inscrito no boletim de jogo."
        ],
        "correta": 0,
        "regra": 4
    },
    {
        "pergunta": "4.6) No início do jogo há apenas 6 jogadores da equipa BRANCA presentes. Imediatamente após o início do jogo, os jogadores que ausentes chegam. O jogador nº. 7 da equipa BRANCA corre em direção ao banco de suplentes e corre, logo a seguir, para dentro do campo através da zona de substituições. Ele não está inscrito no boletim de jogo nem se encontrava presente no início do mesmo. Qual a decisão correta?",
        "opcoes": [
            "a) Desqualificação do jogador nº. 7 da equipa BRANCA (cartão vermelho mostrado pelos árbitros).",
            "b) Exclusão de 2 minutos para o jogador nº. 7 da equipa BRANCA, que deve ser inscrito no boletim de jogo.",
            "c) O jogador nº. 7 da equipa BRANCA deve ser inscrito no boletim de jogo, se estiver em conformidade com os regulamentos da federação responsável.",
            "d) Sanção progressiva para o oficial responsável da equipa BRANCA."
        ],
        "correta": [
            2,
            3
        ],
        "regra": 4
    },
    {
        "pergunta": "4.7) Os árbitros concederam um lançamento livre para a equipa BRANCA na linha de lançamento livre de equipa PRETA. Nessa altura há um sinal de apito do cronometrista, que para o relógio. Os árbitros perguntam sobre a razão para a intervenção do cronometrista. O cronometrista informa os árbitros que o jogador nº. 9 da equipa BRANCA fez uma substituição irregular. Qual a decisão correta?",
        "opcoes": [
            "a) Lançamento livre para a equipa BRANCA na linha de lançamento livre da equipa PRETA.",
            "b) Lançamento livre para a equipa PRETA na própria linha de lançamento livre.",
            "c) Lançamento livre para a equipa PRETA na zona de substituições da equipa BRANCA.",
            "d) Exclusão de 2 minutos para o jogador nº. 9 da equipa BRANCA."
        ],
        "correta": [
            0,
            3
        ],
        "regra": 4
    },
    {
        "pergunta": "4.8) O jogador nº. 14 da equipa PRETA faz uma substituição correta, enquanto o jogo está interrompido. No entanto, um apito vem da mesa do cronometrista. O jogador nº. 14 da equipa PRETA não foi corretamente inscrito no boletim de jogo. Verifica-se que este jogador foi registado com o nº.  18 no boletim de jogo. Qual a decisão correta?",
        "opcoes": [
            "a) Sanção progressiva para o oficial responsável da equipa PRETA.",
            "b) Lançamento livre para a equipa BRANCA na zona da mesa do cronometrista.",
            "c) O número deve ser corrigido no boletim de jogo.",
            "d) O jogo continua com o lançamento livre que corresponde à situação. Relatório escrito."
        ],
        "correta": [
            2,
            3
        ],
        "regra": 4
    },
    {
        "pergunta": "4.9) Quando é permitido que até duas pessoas de uma equipa (oficiais e / ou jogadores) entrem em campo?",
        "opcoes": [
            "a) Durante uma interrupção de jogo.",
            "b) Durante uma interrupção de jogo e com a permissão de um árbitro.",
            "c) Quando um jogador está lesionado.",
            "d) Com a permissão do cronometrista."
        ],
        "correta": 1,
        "regra": 4
    },
    {
        "pergunta": "4.10) O árbitro apita para indicar um time-out porque o jogador nº. 2 da equipa BRANCA está a receber a sua 3ª exclusão de 2 minutos. Quando o árbitro se volta para o cronometrista para ele anotar a respetiva desqualificação verifica que o oficial responsável da equipa BRANCA corre para o campo para protestar sobre a exclusão. O oficial B da equipa BRANCA já tinha recebido uma advertência anteriormente. Qual a decisão correta?",
        "opcoes": [
            "a) Desqualificação do oficial responsável da equipa BRANCA (cartão vermelho mostrado pelos árbitros) e redução em campo de um jogador da equipa BRANCA, por 2 minutos.",
            "b) Advertência pessoal para o oficial responsável pela equipa BRANCA.",
            "c) Desqualificação do oficial responsável pela equipa BRANCA e relatório escrito (cartões vermelho e azul mostrados pelos árbitros).",
            "d) Exclusão de 2 minutos para o oficial responsável da equipa BRANCA.",
            "e) Redução adicional de um jogador em campo da equipa BRANCA por 2 minutos."
        ],
        "correta": [
            3,
            4
        ],
        "regra": 4
    },
    {
        "pergunta": "4.11) Durante um time-out devido a lesão de um jogador, o jogador nº. 2 da equipa BRANCA corre como um jogador adicional para o campo, sem que nenhum dos árbitros lhe tivesse dado permissão para entrar em campo. Qual a decisão correta?",
        "opcoes": [
            "a) Advertência para o jogador nº. 2 da equipa BRANCA",
            "b) Sanção progressiva para o oficial responsável da equipa BRANCA",
            "c) Desqualificação do jogador nº. 2 da equipa BRANCA (cartão vermelho mostrado pelos árbitros)",
            "d) Exclusão de 2 minutos para o jogador nº. 2 da equipa BRANCA e redução de um jogador em campo, durante 2 minutos, para a sua equipa"
        ],
        "correta": 3,
        "regra": 4
    },
    {
        "pergunta": "4.12) O jogador nº. 5 da equipa BRANCA está lesionado em campo e o árbitro central indica time-out e faz o sinal manual de permissão para 2 pessoas da equipa BRANCA entrarem em campo para assistir o jogador nº. 5 da equipa BRANCA. O oficial B da equipa PRETA também entra no campo para dar conselhos ao seu guarda-redes. Qual a decisão correta?",
        "opcoes": [
            "a) Nenhuma decisão. O sinal permite que todos os jogadores e funcionários entrem em campo.",
            "b) Todos os quatro oficiais da equipa PRETA recebem uma advertência e se voltar a acontecer devem ser desqualificados.",
            "c) O oficial responsável da equipa PRETA recebe uma advertência.",
            "d) Sanção progressiva para o oficial B da equipa PRETA.",
            "e) Depois de receber assistência médica no campo de jogo, o jogador nº. 5 da equipa BRANCA tem que deixar o campo imediatamente, e só pode voltar a entrar no campo após o terceiro ataque da sua equipa."
        ],
        "correta": [
            3,
            4
        ],
        "regra": 4
    },
    {
        "pergunta": "4.13) O guarda-redes nº. 16 da equipa BRANCA ficou lesionado e deve ser substituído pelo jogador nº. 5 da equipa BRANCA. O jogador nº. 5 da equipa BRANCA muda a sua camisola. Após 20 minutos, o guarda-redes nº. 16 da equipa BRANCA, está pronto para jogar novamente e o oficial A da equipa faz a substituição. O jogador nº. 5 da equipa BRANCA muda a sua camisola de novo, e é enviado como um jogador de campo, novamente sem indicação ao cronometrista. Qual a decisão correta?",
        "opcoes": [
            "a) Nenhuma sanção, uma vez que é permitido.",
            "b) Lançamento livre para a equipa PRETA.",
            "c) Exclusão de 2 minutos para o jogador nº. 5 da equipa BRANCA.",
            "d) Desqualificação do jogador nº. 5 da equipa BRANCA (cartão vermelho mostrado pelos árbitros)"
        ],
        "correta": 0,
        "regra": 4
    },
    {
        "pergunta": "4.14) O jogador nº. 4 da equipa BRANCA deixa o campo de jogo para além da linha de substituição. Quando o jogador nº. 4 da equipa BRANCA cruza a linha lateral, mas sem ainda ter chegado à sua zona de substituições, o jogador nº. 11 da equipa BRANCA cruza a linha corretamente para entrar no campo de jogo. Qual é a decisão correta após o apito do cronometrista?",
        "opcoes": [
            "a) Lançamento livre para a equipa PRETA onde o jogador nº. 4 da equipa BRANCA deixou o campo.",
            "b) Lançamento livre para a equipa PRETA na zona de substituições da equipa BRANCA.",
            "c) Exclusão de 2 minutos para o jogador nº. 4 da equipa BRANCA.",
            "d) Exclusão de 2 minutos para o jogador nº. 11 da equipa BRANCA.",
            "e) Exclusão de 2 minutos para o jogador nº. 4 da equipa BRANCA e para o jogador nº. 11 da equipa BRANCA."
        ],
        "correta": [
            0,
            2
        ],
        "regra": 4
    },
    {
        "pergunta": "4.15) O Jogador nº. 3 da equipa PRETA comete a primeira substituição irregular para a sua equipa durante uma interrupção de jogo. A interrupção foi causada por uma decisão de lançamento livre a favor da equipa PRETA. O jogador nº. 3 da equipa PRETA não foi advertido nem suspenso ainda no jogo. Qual a decisão correta?",
        "opcoes": [
            "a) Advertência ao jogador nº.  3 da equipa PRETA.",
            "b) Exclusão de 2 minutos para o jogador nº. 3 da equipa PRETA.",
            "c) Lançamento livre para a equipa BRANCA.",
            "d) Lançamento livre para a equipa PRETA."
        ],
        "correta": [
            1,
            3
        ],
        "regra": 4
    },
    {
        "pergunta": "4.16) Depois dos árbitros marcarem um livre de 7 metros para a equipa BRANCA, o jogador nº. 27 da equipa BRANCA, que foi escolhido para concretizar o livre de 7 metros, faz uma substituição irregular. Qual a decisão correta?",
        "opcoes": [
            "a) Lançamento livre para a equipa PRETA.",
            "b) Livre de 7 metrospara a equipa BRANCA.",
            "c) Lançamento de baliza para a equipa PRETA.",
            "d) Exclusão de 2 minutos para o jogador nº. 27 da equipa BRANCA."
        ],
        "correta": [
            1,
            3
        ],
        "regra": 4
    },
    {
        "pergunta": "4.17) A equipa BRANCA marcou um golo. Os árbitros ainda não apitaram para o lançamento de saída quando o jogador nº. 10 da equipa PRETA entra no campo antes do jogador nº. 6 da mesma equipa ter saído do campo. Qual a decisão correta?",
        "opcoes": [
            "a) Lançamento de saída.",
            "b) Lançamento livre para a equipa BRANCA.",
            "c) Exclusão de 2 minutos para o jogador nº. 10 da equipa PRETA.",
            "d) Exclusão de 2 minutos para o jogador nº. 6 da equipa PRETA."
        ],
        "correta": [
            0,
            2
        ],
        "regra": 4
    },
    {
        "pergunta": "4.18) A equipa BRANCA tem apenas 12 jogadores presentes no início do jogo, já que os dois guarda-redes ainda não apareceram. Portanto, a equipa BRANCA começa com um dos doze jogadores de campo como guarda-redes. Qual das seguintes alternativas é / são corretas?",
        "opcoes": [
            "a) O jogador de campo, que começa o jogo como guarda-redes, deve ser registado como número 1, 12 ou 16, no boletim de jogo.",
            "b) O jogador de campo, que começa o jogo como guarda-redes, também pode ser usado como um jogador de campo, mais tarde no jogo.",
            "c) O guarda-redes que chega atrasado da equipa BRANCA deve ser registado com o número 1, 12 ou 16 no boletim de jogo.",
            "d) Um dos dois guarda-redes que chegam atrasados só pode ser usado como um jogador de campo"
        ],
        "correta": 1,
        "regra": 4
    },
    {
        "pergunta": "4.19) Durante um time-out o jogador nº. 5 da equipa BRANCA comete a primeira substituição irregular da sua equipa. A equipa BRANCA estava na posse da bola quando o time-out aconteceu. Qual a decisão correta?",
        "opcoes": [
            "a) Nenhuma sanção.",
            "b) Advertência para o jogador nº. 5 da equipa BRANCA.",
            "c) Exclusão de 2 minutos para o jogador nº. 5 da equipa BRANCA.",
            "d) Lançamento livre para a equipa PRETA.",
            "e) A equipa BRANCA permanece na posse da bola."
        ],
        "correta": [
            2,
            4
        ],
        "regra": 4
    },
    {
        "pergunta": "4.20) O guarda-redes nº.  3 da equipa BRANCA quer marcar um livre de 7 metros. Para proteger a baliza vazia, o jogador nº.  15 da equipa BRANCA entra em campo com um equipamento de guarda-redes e substitui um jogador de campo. Qual a decisão correta?",
        "opcoes": [
            "a) Exclusão de 2 minutos para o guarda-redes nº.  3 da equipa BRANCA.",
            "b) Exclusão de 2 minutos para o jogador nº.  15 da equipa BRANCA.",
            "c) Nenhuma sanção.",
            "d) Livre de 7 metros para a equipa BRANCA.",
            "e) Lançamento livre para a equipa PRETA na zona de substituições de equipa BRANCA."
        ],
        "correta": [
            1,
            3
        ],
        "regra": 4
    },
    {
        "pergunta": "4.21) Durante um contra-ataque da equipa BRANCA, que tem uma clara oportunidade de marcar, o jogador nº. 3 da equipa PRETA comete uma substituição irregular. O cronometrista não reage, mas o árbitro central deteta o que aconteceu. Qual a decisão correta?",
        "opcoes": [
            "a) Exclusão imediata do jogador nº. 3 da equipa PRETA e lançamento livre para a equipa BRANCA.",
            "b) Exclusão imediata do jogador nº. 3 da equipa PRETA e livre de 7 metros para a equipa BRANCA.",
            "c) Esperar até que o lance passe. Então, exclusão para o jogador nº. 3 da equipa PRETA e lançamento livre para a equipa BRANCA.",
            "d) Esperar até que o lance passe. Então, exclusão para o jogador nº. 3 da equipa PRETA e um lançamento apropriado de acordo com a situação."
        ],
        "correta": 1,
        "regra": 4
    },
    {
        "pergunta": "4.22) Um remate à baliza é defendido pelo guarda-redes nº. 1 da equipa BRANCA e a bola vai a rolar ao longo da linha lateral perto do banco de substituições da equipa BRANCA. O jogador nº. 5 da equipa BRANCA, que está sentado no banco de suplentes, coloca um pé dentro do campo para parar a bola, antes desta cruzar a linha lateral. Qual a decisão correta?",
        "opcoes": [
            "a) Lançamento livre para a equipa PRETA.",
            "b) Reposição de bola em jogo para a equipa PRETA.",
            "c) Exclusão de 2 minutos para o jogador nº. 5 da equipa BRANCA.",
            "d) Desqualificação do jogador nº. 5 da equipa BRANCA (cartão vermelho mostrado pelos árbitros).",
            "e) Equipa BRANCA reduzida em um jogador em campo durante 2 minutos"
        ],
        "correta": [
            0,
            2,
            4
        ],
        "regra": 4
    },
    {
        "pergunta": "4.23) 30 segundos antes do seu tempo de exclusão acabar, o jogador nº.  3 da equipa BRANCA entra no campo, porém sem interferir no jogo. A equipa BRANCA está na posse da bola. Qual a decisão correta?",
        "opcoes": [
            "a) Lançamento livre para a equipa PRETA.",
            "b) Lançamento livre para a equipa BRANCA.",
            "c) Exclusão de 2 minutos para o jogador nº. 3 da equipa BRANCA e a equipa BRANCA é reduzida em um jogador em campo por 30 segundos.",
            "d) 30 segundos para o jogador nº. 3 da equipa BRANCA e a equipa BRANCA deve ser reduzida em um jogador no campo por 2 minutos.",
            "e) Desqualificação do jogador nº. 3 da equipa BRANCA (cartão vermelho mostrado pelos árbitros) e a equipa BRANCA deve ser reduzida em mais um jogador em campo por 30 segundos."
        ],
        "correta": [
            0,
            2
        ],
        "regra": 4
    },
    {
        "pergunta": "4.24) O jogador nº. 5 da equipa BRANCA foi excluído. Depois de 1 minuto e 45 segundos da exclusão de 2 minutos, o oficial A da equipa BRANCA coloca-o novamente em campo. Qual a decisão correta?",
        "opcoes": [
            "a) Uma outra exclusão de 2 minutos para o jogador nº. 5 da equipa BRANCA, e a equipa BRANCA é reduzida em um jogador em campo por 2 minutos e 15 segundos.",
            "b) Exclusão para o jogador nº. 5 da equipa BRANCA (cartão vermelho mostrado pelos árbitros), e a equipa BRANCA é reduzido por dois jogadores em campo por 15 segundos e por um jogador em campo por 1 minuto e 45 segundos.",
            "c) Uma outra exclusão de 2 minutos para o jogador nº. 5 da equipa BRANCA e a equipa BRANCA é reduzida por dois jogadores em campo, um por 15 segundos e outro por 1 minuto e 45 segundos."
        ],
        "correta": 2,
        "regra": 4
    },
    {
        "pergunta": "4.25) Depois da sua exclusão de 2 minutos terminar, o guarda-redes nº. 1 da equipa PRETA quer reentrar em campo, mas a sua equipa está a defender nesse momento. Ele entra em campo, vestindo a sua camisola de guarda-redes, para assumir a posição de ponta, como jogador de campo da equipa PRETA. Qual a decisão correta?",
        "opcoes": [
            "a) O jogo continua sem interrupção.",
            "b) Livre de 7 metros para a equipa BRANCA.",
            "c) Lançamento livre para a equipa BRANCA.",
            "d) Exclusão de 2 minutos para o guarda-redes nº. 1 da equipa PRETA."
        ],
        "correta": [
            2,
            3
        ],
        "regra": 4
    },
    {
        "pergunta": "4.26) O que é correto em relação a um jogador que está a sangrar em campo?",
        "opcoes": [
            "a) O jogador deve deixar o campo imediatamente e voluntariamente.",
            "b) O jogador pode permanecer em campo até a próxima interrupção do jogo",
            "c) O jogador, que substitui o que está a sangrar, pode entrar no campo além da linha de substituição.",
            "d) O jogador não deve voltar a entrar no campo, até a próxima interrupção do jogo.",
            "e) Se o jogador se recusa a seguir as instruções dos árbitros para deixar o campo, deve ser punido por conduta antidesportiva"
        ],
        "correta": [
            0,
            4
        ],
        "regra": 4
    },
    {
        "pergunta": "4.27) O jogador nº. 5 da equipa BRANCA está sozinho com o guarda-redes nº. 1 da equipa PRETA e tem uma clara oportunidade de marcar. O jogador nº. 11 da equipa PRETA faz uma substituição irregular, ao entrar em campo, antes do jogador nº. 9 da equipa PRETA sair. O cronometrista apita por causa desta falta, precisamente quando o jogador nº. 5 da equipa BRANCA está pronto para rematar. Qual a decisão correta?",
        "opcoes": [
            "a) Exclusão de 2 minutos para o jogador nº. 11 da equipa PRETA.",
            "b) Desqualificação para o jogador nº. 11 da equipa PRETA, relatório escrito (cartões vermelho e azul mostrados pelos árbitros).",
            "c) Lançamento livre para a equipa BRANCA.",
            "d) Livre de 7 metros para a equipa BRANCA."
        ],
        "correta": [
            0,
            3
        ],
        "regra": 4
    },
    {
        "pergunta": "4.28) O guarda-redes nº. 1 da equipa PRETA defende um remate e joga a bola para o seu companheiro de equipa, o jogador nº. 4 da equipa PRETA. Agora, o guarda-redes nº. 1 da equipa PRETA vai para a linha lateral perto da sua zona de substituições. Ele claramente cruza a linha, recebe uma toalha e bebe de uma garrafa de água. Ele não é substituído no campo por outro Guarda-redes ou jogador de campo. Qual a decisão correta?",
        "opcoes": [
            "a) O jogo continua sem interrupção, pois isto é permitido.",
            "b) Exclusão de 2 minutos para o guarda-redes nº. 1 da equipa PRETA por substituição irregular.",
            "c) Lançamento livre para a equipa BRANCA na área da substituição da equipa PRETA."
        ],
        "correta": 0,
        "regra": 4
    },
    {
        "pergunta": "4.29) O oficial A da equipa PRETA no início do jogo recebe uma advertência. Após uma decisão dos árbitros, o oficial D da equipa PRETA, corre diversos metros para dentro do campo sem a permissão dos árbitros. Qual a decisão correta?",
        "opcoes": [
            "a) Nenhuma sanção.",
            "b) Advertência para o oficial D da equipa PRETA.",
            "c) Exclusão de 2 minutos para o oficial D da equipa PRETA.",
            "d) Desqualificação para o oficial D da equipa PRETA (cartões vermelho e azul mostrados"
        ],
        "correta": 2,
        "regra": 4
    },
    {
        "pergunta": "4.30) Há um time-out, devido ao jogador nº. 6 da equipa BRANCA estar lesionado, por causa de um incidente que não conduziu a uma sanção progressiva para um jogador da equipa PRETA. Os árbitros deram permissão para que duas pessoas entrassem no campo para ajudar o jogador nº. 6 da equipa BRANCA. O oficial C da equipa BRANCA, está a auxiliar o jogador nº. 6 da equipa BRANCA. O oficial A da equipa BRANCA persegue o jogador nº. 5 da equipa PRETA, que em sua opinião causou a lesão. Ele segue o jogador nº. 5 da equipa PRETA até à zona de substituições da equipa PRETA e bate-lhe na cara. Qual a decisão correta?",
        "opcoes": [
            "a) Desqualificação do oficial A da equipa BRANCA, relatório escrito (cartões vermelho e azul mostrados pelos árbitros), equipa BRANCA é reduzida por um jogador em campo por 2 minutos.",
            "b) O jogo é retomado depois de um sinal de apito com o lançamento que corresponde à razão da interrupção.",
            "c) Exclusão de 2 minutos para o oficial A da equipa BRANCA, equipa BRANCA é reduzida em um jogador em campo por 2 minutos.",
            "d) Lançamento livre para a equipa PRETA.",
            "e) Desqualificação sem relatório escrito do oficial A da equipa BRANCA (cartão vermelho mostrado pelos árbitros), a equipa BRANCA é reduzida em um jogador em campo por 2 minutos.",
            "f) Depois de receber assistência médica em campo, o jogador nº. 6 da equipa BRANCA deve deixar o campo e só pode reentrar no campo após o terceiro ataque da sua equipa."
        ],
        "correta": [
            0,
            1,
            5
        ],
        "regra": 4
    },
    {
        "pergunta": "4.31) Logo após a execução de um lançamento de saída para a equipa PRETA, os árbitros apercebem-se que uma pessoa que não está inscrita no boletim de jogo está presente na zona de substituições da equipa PRETA. Acontece que é um dos membros da direção do clube, mas a equipa PRETA já tem quatro outras pessoas inscritas como oficiais da equipa no boletim de jogo. Qual a decisão correta?",
        "opcoes": [
            "a) A pessoa deve deixar a zona de substituições.",
            "b) Sanção pessoal para o oficial responsável da equipa PRETA.",
            "c) Um dos oficiais adicionais da equipa deve deixar a zona de substituições.",
            "d) O jogo é retomado com um lançamento livre para a equipa BRANCA."
        ],
        "correta": [
            0,
            1,
            3
        ],
        "regra": 4
    },
    {
        "pergunta": "4.32) O que é aplicável em relação ao equipamento?",
        "opcoes": [
            "a) Todos os jogadores de uma equipa identificados como guarda-redes devem usar camisolas de cor idêntica.",
            "b) O número dos jogadores deve ter pelo menos 20 centímetros quer na frente, quer na parte de trás da camisola.",
            "c) Os guarda-redes estão autorizados a usar a proteção da cabeça se for feita de material macio.",
            "d) Os jogadores, incluindo os guarda-redes podem usar os números de 1 a 100."
        ],
        "correta": 0,
        "regra": 4
    },
    {
        "pergunta": "4.33) O Jogador nº. 10 da equipa BRANCA está a cumprir a sua primeira exclusão de 2 minutos a partir do minuto 21:00. Depois do jogo ser reiniciado, ele reclama tão fortemente que os árbitros interrompem o jogo ao minuto 21:30 para sancionar o jogador nº. 10 da equipa BRANCA, com uma exclusão adicional de 2 minutos. Quais são as consequências para a equipa BRANCA?",
        "opcoes": [
            "a) Exclusão de 2 minutos para o jogador nº. 10 da equipa BRANCA.",
            "b) Desqualificação do jogador nº. 10 da equipa BRANCA.",
            "c) A equipa BRANCA será reduzida em um jogador em campo até ao minuto 25:00.",
            "d) A equipa BRANCA será reduzida em dois jogadores em campo até ao minuto 23:00 e, em seguida, de um jogador em campo até ao minuto 23:30."
        ],
        "correta": [
            0,
            3
        ],
        "regra": 4
    },
    {
        "pergunta": "4.34) Em qual dos seguintes casos deve o oficial responsável da equipa receber uma sanção pessoal?",
        "opcoes": [
            "a) Quando um jogador da sua equipa deixa a zona de substituições sem informar o cronometrista/secretário.",
            "b) Se existirem pessoas presentes na zona de substituições, que não estejam inscritas no boletim de jogo, quando o jogo começa.",
            "c) Quando um jogador adicional entra no campo.",
            "d) Quando um jogador, que não está autorizado a participar, entra no campo.",
            "e) Se for detetado que os jogadores em campo usam equipamento irregular, após o início do jogo.",
            "f) Se existirem violações na zona de substituições que não possam ser claramente atribuídas a uma pessoa em particular.",
            "g) Se for detectado que os jogadores na área de substituição usam equipamentos irregulares, após o início do jogo"
        ],
        "correta": [
            1,
            3,
            4,
            5
        ],
        "regra": 4
    },
    {
        "pergunta": "4.35) Os árbitros fazem o sinal manual para dar permissão de entrada em campo porque um jogador de equipa BRANCA está lesionado. Quem pode entrar no campo?",
        "opcoes": [
            "a) Dois oficiais da equipa BRANCA, ninguém mais.",
            "b) Dois oficiais da equipa BRANCA e dois oficiais da equipa PRETA.",
            "c) Duas pessoas (oficiais ou jogadores) da equipa BRANCA.",
            "d) Duas pessoas (oficiais ou jogadores) da equipa BRANCA e PRETA.",
            "e) O médico da equipa BRANCA, se ele não for um dos quatro oficiais da equipa."
        ],
        "correta": 2,
        "regra": 4
    },
    {
        "pergunta": "4.36) O oficial C da equipa BRANCA já recebeu uma advertência por protestos. Mais tarde, o oficial B da equipa BRANCA entra em campo sem permissão, mas não se comporta de forma antidesportiva. Qual a decisão correta?",
        "opcoes": [
            "a) Advertência para o oficial B da equipa BRANCA.",
            "b) Exclusão de 2 minutos para o oficial B da equipa BRANCA; ele deve sair do banco por 2 minutos.",
            "c) Desqualificação do oficial B da equipa BRANCA (cartão vermelho mostrado pelos árbitros, a equipa BRANCA será reduzida por um jogador no campo por 2 minutos).",
            "d) Exclusão de 2 minutos para o oficial B da equipa BRANCA, a equipa BRANCA será reduzida em um jogador em campo por 2 minutos, o oficial B pode ficar na zona de substituições"
        ],
        "correta": 3,
        "regra": 4
    },
    {
        "pergunta": "4.37) Quais das seguintes ações NÃO são permitidas, quando há um time-out, devido a uma lesão, e os árbitros sinalizaram a permissão de entrada em campo para pessoas da equipa BRANCA?",
        "opcoes": [
            "a) Os jogadores da equipa PRETA ficarem perto da linha lateral, a fim de obterem instruções do treinador.",
            "b) Os jogadores da equipa BRANCA efetuarem substituições irregulares.",
            "c) Um dos oficiais da equipa BRANCA, que está em campo, mover-se para longe do jogador lesionado, com o intuito de dar instruções a outros jogadores da sua equipa."
        ],
        "correta": [
            1,
            2
        ],
        "regra": 4
    },
    {
        "pergunta": "4.38) Antes do início da partida o delegado observa que BRANCO 7 está a usar protetores de tornozelo com material duro/rígido e que o mesmo não está coberto. Qual é/são a(s) decisão(ões) correta(s)?",
        "opcoes": [
            "a) BRANCO 7 pode jogar com os protetores de tornozelo, mas o delegado deve enviar/elaborar relatório escrito.",
            "b) BRANCO 7 não pode jogar com protetores de tornozelo que tenham partes duras descobertas. O delegado deve alertar o oficial responsável da equipa de que o jogador deve remover os protetores de tornozelo ou cobrir as partes duras com material macio.",
            "c) BRANCO 7 recebe uma advertência.",
            "d) O oficial responsável da equipa BRANCA receberá uma advertência.",
            "e) Nenhuma das respostas anteriores está correcta"
        ],
        "correta": 1,
        "regra": 4
    },
    {
        "pergunta": "4.39) Ao minuto 29:00 da primeira parte, o jogador nº. 5 da equipa BRANCA recebe uma exclusão de 2 minutos. Depois do intervalo, o árbitro central apita para começar a segunda parte. 3 segundos depois, o cronometrista apita. A equipa BRANCA tem 7 jogadores em campo. Qual a decisão correta?",
        "opcoes": [
            "a) Um jogador da equipa BRANCA deve deixar o campo, sem sanção adicional.",
            "b) Exclusão de 2 minutos para o jogador adicional da equipa BRANCA.",
            "c) A equipa BRANCA será reduzida em dois jogadores em campo por 57 segundos e em um jogador por 1 minuto e 3 segundos."
        ],
        "correta": [
            1,
            2
        ],
        "regra": 4
    },
    {
        "pergunta": "4.40) Tempo de jogo: 43:27 - interrupção pelo cronometrista após um golo do guarda-redes nº. 15 da equipa BRANCA e do respetivo lançamento de saída. O cronometrista informa os árbitros, que o jogador nº. 15 da equipa BRANCA não está registado no boletim de jogo. Já estão inscritos 14 jogadores para a equipa BRANCA. Os árbitros percebem que o jogador nº. 11 da equipa BRANCA nem sequer está presente. Qual a decisão correta?",
        "opcoes": [
            "a) O golo é anulado.",
            "b) O golo é validado.",
            "c) O jogador nº. 11 da equipa BRANCA é removido e o jogador nº. 15 da equipa BRANCA é registado no boletim de jogo em conformidade com os regulamentos da federação responsável.",
            "d) O jogador nº. 15 da equipa BRANCA não pode jogar e deve deixar o campo",
            "e) Sanção progressiva para o oficial responsável da equipa BRANCA.",
            "f) Relatório escrito."
        ],
        "correta": [
            1,
            2,
            4,
            5
        ],
        "regra": 4
    },
    {
        "pergunta": "4.41) O guarda-redes nº. 12 da equipa BRANCA deita-se no chão com uma lesão no joelho, depois de defender um remate da equipa PRETA. Qual a decisão correta?",
        "opcoes": [
            "a) O guarda-redes nº. 12 da equipa BRANCA pode continuar em jogo depois de receber assistência médica no campo.",
            "b) Duas pessoas da equipa BRANCA, que estão autorizados a participar, podem entrar no campo para dar assistência médica ao guarda-redes nº. 12 da equipa BRANCA, no campo, após os sinais manuais 15 e 16 serem efetuados por um dos árbitros.",
            "c) Apenas uma pessoa da equipa BRANCA, que esteja autorizada a participar, pode entrar no campo para dar assistência médica ao guarda-redes nº. 12 da equipa BRANCA, após os sinais manuais 15 e 16 serem efetuados por um dos árbitros.",
            "d) Depois de receber assistência médica no campo, o guarda-redes nº. 12 da equipa BRANCA só pode reentrar no campo após o terceiro ataque da sua equipa.",
            "e) Independentemente do número de ataques, o guarda-redes nº. 12 da equipa BRANCA, pode reentrar no campo, quando o jogo continuar, após o fim do intervalo.",
            "f) Se os oficiais da equipa se recusarem a fornecer o tratamento necessário para o guarda- redes nº. 12 da equipa BRANCA, o oficial responsável da equipa, deverá ser punido progressivamente."
        ],
        "correta": [
            1,
            3,
            4,
            5
        ],
        "regra": 4
    },
    {
        "pergunta": "4.42) O guarda-redes nº. 1 da equipa BRANCA defende um remate da equipa PRETA. Ao fazê-lo, ele bate com a cabeça contra o poste da baliza. Ele precisa de assistência médica no campo. Qual a decisão correta?",
        "opcoes": [
            "a) O guarda-redes nº. 1 da equipa BRANCA pode continuar em jogo após ter recebido assistência médica no campo, porque a lesão foi causada por um ferimento da cabeça.",
            "b) Depois de receber assistência médica no campo, o guarda-redes nº. 1 da equipa BRANCA só pode reentrar no campo após o terceiro ataque da sua equipa."
        ],
        "correta": 1,
        "regra": 4
    },
    {
        "pergunta": "4.43) Depois de receber assistência médica no campo, o jogador nº. . 7 da equipa BRANCA está sentado no banco na zona de substituições. Durante o primeiro ataque da equipa BRANCA, o jogador nº. 2 da equipa PRETA intercepta a bola e corre em contra-ataque sozinho, ficando isolado com o guarda-redes nº. 12 da equipa BRANCA. Antes do jogador nº. 2 da equipa PRETA rematar, o jogador nº. 7 da equipa BRANCA entra em campo numa substituição com o jogador nº. 9 da equipa BRANCA. Qual a decisão correta?",
        "opcoes": [
            "a) O cronometrista espera até que o jogador nº. 2 da equipa PRETA remate, antes de interromper o jogo, devido a uma substituição irregular da equipa BRANCA.",
            "b) O cronometrista interrompe o jogo imediatamente por causa de uma substituição irregular da equipa BRANCA.",
            "c) Time-out.",
            "d) Exclusão de 2 minutos ao jogador nº. 7 da equipa BRANCA.",
            "e) Desqualificação sem relatório escrito do jogador nº. 7 da equipa BRANCA (cartão vermelho mostrado pelos árbitros).",
            "f) Livre de 7 metros para a equipa PRETA.",
            "g) Lançamento livre para a equipa PRETA.",
            "h) Independentemente do número de ataques da sua equipa, o jogador nº. 7 da equipa BRANCA, pode reentrar no campo depois de cumprir uma exclusão de 2 minutos."
        ],
        "correta": [
            1,
            2,
            3,
            5,
            7
        ],
        "regra": 4
    },
    {
        "pergunta": "4.44) Depois de receber assistência médica no campo, o jogador nº. 11 da equipa PRETA está sentado no banco a reclamar sobre uma decisão do árbitro. Devido a isso, ele recebe a sua primeira exclusão de 2 minutos do jogo. Após o segundo ataque da equipa PRETA, o jogador nº. 11 da equipa PRETA, reentra no campo, depois de cumprir a sua exclusão de 2 minutos. Qual a decisão correta?",
        "opcoes": [
            "a) Time-out.",
            "b) Exclusão de 2 minutos para o jogador nº. 11 da equipa PRETA.",
            "c) Deixar prosseguir o jogo.",
            "d) Lançamento livre para a equipa BRANCA."
        ],
        "correta": 2,
        "regra": 4
    },
    {
        "pergunta": "4.45) O jogador nº. 10 da equipa PRETA recebe a bola na linha de lançamento livre. Logo depois de agarrar a bola, ele é puxado para baixo pelo jogador nº. 3 da equipa BRANCA. Ele cai mal e lesiona o cotovelo, precisando de assistência médica em campo. Qual a decisão correta?",
        "opcoes": [
            "a) Advertência para o jogador nº. 3 da equipa BRANCA.",
            "b) Exclusão de 2 minutos para jogador nº. 3 da equipa BRANCA.",
            "c) Duas pessoas da equipa PRETA, que estão autorizadas a participar, podem entrar no campo para dar ao jogador nº. 10 da equipa PRETA, assistência médica em campo, após os sinais manuais nº. s 15 e 16 serem efetuados por um dos árbitros.",
            "d) O jogador nº. 10 da equipa PRETA pode continuar o jogo, depois de receber assistência médica em campo.",
            "e) Depois de receber assistência médica em campo, o jogador nº. 10 da equipa PRETA só pode reentrar em campo após o terceiro ataque da sua equipa.",
            "f) Time-out"
        ],
        "correta": [
            1,
            2,
            3,
            5
        ],
        "regra": 4
    },
    {
        "pergunta": "4.46) O jogador nº. 10 da equipa PRETA recebe a bola num contra-ataque, vinda do jogador nº. 9 da equipa PRETA. Logo depois de passar a bola, o jogador nº. 9 da equipa PRETA é puxado para baixo pelo jogador nº. 11 da equipa BRANCA. Logo depois de receber a bola, o jogador nº. 10 da equipa PRETA cai e fica lesionado no chão. Qual a decisão correta?",
        "opcoes": [
            "a) Advertência para o jogador nº. 11 da equipa BRANCA.",
            "b) Exclusão de 2 minutos para o jogador nº. 11 da equipa BRANCA.",
            "c) Duas pessoas da equipa PRETA, que estão autorizadas a participar, podem entrar no campo para dar ao jogador nº. 10 da equipa PRETA, assistência médica em campo, após os sinais manuais nº. s 15 e 16 serem efetuados por um dos árbitros.",
            "d) O jogador nº. 10 da equipa PRETA pode continuar o jogo, depois de receber assistência médica em campo.",
            "e) Depois de receber assistência médica em campo, o jogador nº. 10 da equipa PRETA só pode reentrar em campo após o terceiro ataque da sua equipa.",
            "f) Time-out"
        ],
        "correta": [
            1,
            2,
            4,
            5
        ],
        "regra": 4
    },
    {
        "pergunta": "4.47) Com 3 minutos de jogo por jogar, o jogo está empatado a 21-21. O jogador nº. 2 da equipa PRETA, que é o melhor marcador da sua equipa, tem um azar e torce o tornozelo. O jogador nº. 2 da equipa PRETA está no chão. Um dos árbitros, pergunta ao jogador nº. 2 da equipa PRETA, se precisa de assistência médica no campo. Como o jogador nº. 2 da equipa PRETA não responde à pergunta, mas ainda está deitado no chão, os árbitros interrompem o jogo e fazem os sinais manuais 15 e 16 para permitir que duas pessoas da equipa PRETA entrem no campo, para dar assistência médica ao jogador nº. 2 da equipa PRETA. A equipa PRETA recusa-se a enviar pessoas para o campo e antes dos árbitros tomarem qualquer outra ação, o jogador nº. 2 da equipa PRETA está pronto para continuar o jogo. Qual a decisão correta?",
        "opcoes": [
            "a) O jogador nº. 2 da equipa PRETA pode continuar o jogo.",
            "b) O jogador nº. 2 da equipa PRETA deve deixar o campo e só pode reentrar no campo após o terceiro ataque da sua equipa.",
            "c) Sanção progressiva ao oficial responsável da equipa PRETA."
        ],
        "correta": [
            1,
            2
        ],
        "regra": 4
    },
    {
        "pergunta": "4.48) Com 30 segundos da primeira parte por jogar, o jogador nº. 5 da equipa BRANCA recebe assistência médica no campo. Depois de receber assistência médica no campo, ele deixa o campo e só pode voltar a entrar após o terceiro ataque da sua equipa. Após um minuto da segunda parte, durante o segundo ataque da equipa BRANCA, o jogador nº. 5 da equipa BRANCA entra no campo, numa substituição correta com o jogador nº. 4 da equipa BRANCA. Qual a decisão correta?",
        "opcoes": [
            "a) Deixar prosseguir o jogo.",
            "b) Exclusão de 2 minutos para o jogador nº. 5 da equipa BRANCA devido a uma substituição irregular (entrar no campo demasiado cedo, devido a ter recebido assistência médica no campo).",
            "c) Time-out."
        ],
        "correta": 0,
        "regra": 4
    },
    {
        "pergunta": "4.49) Após uma colisão, o jogador nº. 4 da equipa BRANCA e o jogador nº. 5 da equipa PRETA, estão deitados no chão aparentemente lesionados. Os árbitros imediatamente interrompem o jogo e fazem os sinais manuais nº. s 15 e 16 para dar a ambas as equipas, permissão para deixar duas pessoas entrarem no campo, para dar assistência médica. Antes de qualquer pessoa entrar no campo, o jogador nº. 5 da equipa PRETA está pronto para jogar. O jogador nº. 4 da equipa BRANCA recebe assistência médica no campo. Depois de 20 segundos, o jogo pode continuar. Qual a decisão correta?",
        "opcoes": [
            "a) Depois de receber assistência médica no campo, o jogador nº. 4 da equipa BRANCA tem que deixar o campo e só pode reentrar após o terceiro ataque da sua equipa.",
            "b) Como o jogador nº. 5 da equipa PRETA não recebeu assistência médica no campo está autorizado a continuar o jogo.",
            "c) O jogador nº. 5 da equipa PRETA tem que deixar o campo e só pode reentrar após o terceiro ataque da sua equipa."
        ],
        "correta": [
            0,
            2
        ],
        "regra": 4
    },
    {
        "pergunta": "4.50) O jogador nº. 2 da equipa BRANCA está lesionado e precisa de assistência médica em campo. A primeira parte termina após o primeiro ataque da sua equipa. Quando o árbitro apita para começar a segunda parte, o jogador nº. 2 da equipa BRANCA, está em campo durante o ataque da sua equipa. Qual a decisão correta?",
        "opcoes": [
            "a) O cronometrista interrompe o jogo imediatamente e informa os árbitros.",
            "b) Exclusão de 2 minutos para o jogador nº. 2 da equipa BRANCA.",
            "c) Deixar jogar.",
            "d) Lançamento livre para a equipa PRETA na área de substituição.",
            "e) Sem exclusão para o jogador nº. 2 da equipa BRANCA, que deve deixar o campo. A equipa BRANCA continua na posse da bola porque foi um erro do cronometrista/delegado."
        ],
        "correta": 2,
        "regra": 4
    },
    {
        "pergunta": "4.51) O jogador nº. 4 da equipa BRANCA, está a receber assistência médica no campo. Depois de receber o tratamento, o jogador nº. 4 da equipa BRANCA tem que deixar o campo e só pode voltar a entrar após o terceiro ataque da sua equipa. Após o segundo ataque da equipa BRANCA, o oficial A da equipa BRANCA, pede ao jogador nº. 4 da equipa BRANCA para entrar no campo para resolver uma situação na defesa. O Jogador nº. 4 da equipa BRANCA entra no campo através  de uma substituição com o jogador nº. 6 da equipa BRANCA para jogar apenas na defesa. Qual a decisão correta?",
        "opcoes": [
            "a) Deixar jogar – O jogador nº. 4 da equipa BRANCA pode jogar na defesa.",
            "b) Advertência para o jogador nº. 4 da equipa BRANCA, porque ele entrou no campo demasiado cedo.",
            "c) Exclusão de 2 minutos para o jogador nº. 4 da equipa BRANCA, devido a uma substituição irregular."
        ],
        "correta": 2,
        "regra": 4
    },
    {
        "pergunta": "4.52) O jogador nº. 11 da equipa BRANCA, desliza no chão e pára fora do campo no lado oposto da área de substituição. Ele bate com a cabeça no quadro de publicidade. Os árbitros imediatamente interrompem o jogo para chamar assistência médica para o jogador nº. 11 da equipa BRANCA. Depois de 20 segundos, o jogador nº. 11 da equipa BRANCA está pronto para jogar. Qual a decisão correta?",
        "opcoes": [
            "a) O jogador nº. 11 da equipa BRANCA está autorizado a continuar o jogo, porque ele estava deitado fora do campo, quando recebeu assistência médica.",
            "b) O jogador nº. 11 da equipa BRANCA tem que deixar o campo e só pode reentrar após o terceiro ataque da sua equipa."
        ],
        "correta": 1,
        "regra": 4
    },
    {
        "pergunta": "4.53) Após um minuto de jogo, há uma luta entre o jogador nº. 3 da equipa PRETA e o jogador nº. 6 da equipa BRANCA. O jogador nº. 3 da equipa PRETA, termina deitado no chão, aparentemente lesionado. Os árbitros optam por dar um aviso verbal ao jogador nº. 6 da equipa BRANCA. O jogador nº. 3 da equipa PRETA, pede assistência médica no campo. Depois de receber assistência médica no campo, o jogador nº. 3 da equipa PRETA está pronto para continuar o jogo. Qual a decisão correta?",
        "opcoes": [
            "a) O jogador nº. 3 da equipa PRETA pode continuar o jogo.",
            "b) O jogador nº. 3 da equipa PRETA, tem que deixar o campo e só pode reentrar após o terceiro ataque da sua equipa."
        ],
        "correta": 1,
        "regra": 4
    },
    {
        "pergunta": "4.54) A equipa PRETA está num contra-ataque. O jogador nº. 2 da equipa PRETA, dribla a bola e é empurrado pelo jogador nº. 10 da equipa BRANCA. Ele perde parcialmente o controlo do corpo, mas consegue passar a bola para o jogador nº. 4 da equipa PRETA, que marca um golo. Depois de marcar o golo, o jogador nº. 4 da equipa PRETA, torce o tornozelo enquanto corre de volta para a defesa. Os árbitros interrompem o jogo, para dar 2 minutos de exclusão ao jogador nº. 10 da equipa BRANCA e dar permissão para 2 pessoas entrarem em campo, para dar assistência médica ao jogador nº. 4 da equipa PRETA. Depois de 30 segundos, o jogador nº. 4 da equipa PRETA está pronto para jogar. Qual a decisão correta?",
        "opcoes": [
            "a) O jogador nº. 4 da equipa pode continuar o jogo.",
            "b) O jogador nº. 4 da equipa PRETA tem de deixar o campo e só pode reentrar após o terceiro ataque da sua equipa."
        ],
        "correta": 1,
        "regra": 4
    },
    {
        "pergunta": "4.55) O jogador nº. 11 da equipa BRANCA, faz um remate à baliza. O defesa/ jogador nº. 2 da equipa PRETA é infelizmente atingido no rosto pela bola e precisa de assistência médica no campo. Após 20 segundos de tratamento, o jogador nº. 2 da equipa PRETA está pronto para jogar. Qual a decisão correta?",
        "opcoes": [
            "a) O jogador nº. 2 da equipa PRETA pode continuar o jogo, porque a lesão foi causada por uma bola na cara.",
            "b) O jogador nº. 2 da equipa PRETA tem de deixar o campo e só pode reentrar após o terceiro ataque da sua equipa."
        ],
        "correta": 1,
        "regra": 4
    },
    {
        "pergunta": "4.56) O jogador nº. 2 da equipa PRETA está deitado no chão na área de baliza da equipa BRANCA, depois de um remate à baliza, pedindo assistência médica, aparentemente, por causa de uma lesão na perna. A equipa BRANCA começou um contra-ataque. Qual a decisão correta?",
        "opcoes": [
            "a) Os árbitros imediatamente interrompem o jogo e mostram os sinais manuais 15 e 16 para chamar assistência médica para o jogador nº. 2 da equipa PRETA.",
            "b) Deixar jogar até que haja um resultado do ataque contra a equipa BRANCA, de seguida, interromper o jogo para chamar assistência médica para o jogador nº. 2 da equipa PRETA."
        ],
        "correta": 1,
        "regra": 4
    },
    {
        "pergunta": "4.57) O jogador nº. 2 da equipa BRANCA está no aquecimento sem a proteção do cotovelo. Após 5 minutos de jogo, a equipa BRANCA está na posse da bola. O jogador nº. 2 da equipa BRANCA, entra no campo, por uma substituição correta. Os árbitros reconhecem, que o jogador nº. 2 da equipa BRANCA agora utiliza uma proteção do cotovelo, mas com componentes duros não protegidos. Qual a decisão correta?",
        "opcoes": [
            "a) Deixar jogar, é permitido usar uma proteção de cotovelo com os componentes duros não protegidos.",
            "b) Os árbitros interrompem o jogo, o jogador nº. 2 da equipa BRANCA tem que deixar o campo e só pode reentrar depois de remover a proteção do cotovelo ou de cobrir os componentes duros.",
            "c) Os árbitros interrompem o jogo, o jogador nº. 2 da equipa BRANCA tem que deixar o campo e só pode reentrar depois de remover a proteção do cotovelo.",
            "d) Sanção progressiva para o jogador nº. 2 da equipa BRANCA.",
            "e) Sanção progressiva para o oficial responsável da equipa BRANCA.",
            "f) Lançamento livre para a equipa BRANCA.",
            "g) Lançamento livre para a equipa PRETA."
        ],
        "correta": [
            2,
            4,
            6
        ],
        "regra": 4
    },
    {
        "pergunta": "4.58) Enquanto a equipa BRANCA está a atacar, perto da linha de 9m, o jogador nº. 7 da equipa BRANCA entra em campo, após uma substituição normal, vestindo a sua blusa/casaco de fato de treino amarelo, sobre o equipamento normal BRANCO. Qual a decisão correta?",
        "opcoes": [
            "a) Os árbitros interrompem o jogo, o jogador nº7 BRANCO deve tirar a blusa (casaco) do fato de treino amarelo, antes de continuar no campo.",
            "b) Lançamento livre para a equipa PRETA.",
            "c) Exclusão de 2 minutos para o jogador nº. 7 da equipa BRANCA.",
            "d) Lançamento livre para a equipa BRANCA."
        ],
        "correta": [
            0,
            3
        ],
        "regra": 4
    },
    {
        "pergunta": "4.59) A equipa BRANCA está na posse da bola quando o cronometrista interrompe a partida. O cronometrista diz aos árbitros que o jogador nº.  11 da equipa BRANCA entrou em campo e não está na ficha de jogo. Acontece que o oficial A, erradamente, incluiu o jogador na ficha de jogo com o número 13. Qual é a decisão correta?",
        "opcoes": [
            "a) Lançamento livre para a equipa BRANCA.",
            "b) Lançamento livre para a equipa PRETA.",
            "c) O jogador nº. 11 da equipa BRANCA não está autorizado a participar no jogo.",
            "d) O erro é corrigido e o jogador nº.  11 da equipa BRANCA tem o direito de participar.",
            "e) Nota no relatório do jogo.",
            "f) Sanção progressiva para oficial A da equipa BRANCA."
        ],
        "correta": [
            0,
            3,
            4
        ],
        "regra": 4
    },
    {
        "pergunta": "4.60) O marcador está 29:29 a faltar 10 segundos no jogo para jogar. O guarda-redes nº. 12 da equipa BRANCA executa um lançamento de baliza e passa a bola para o jogador nº. 11 da equipa BRANCA. O jogador nº. 11 da equipa BRANCA vê que o jogador nº. 9 da equipa BRANCA está numa posição isolado na linha de área de baliza da equipa PRETA. Antes de poder fazer o passe para o jogador nº. 9 da equipa BRANCA, o cronometrista interrompe o jogo por causa de uma substituição irregular. O jogador nº. 2 da equipa PRETA entrou no campo antes do jogador nº. 4 da equipa PRETA sair do mesmo. Qual é a decisão correta?",
        "opcoes": [
            "a) Time-out.",
            "b) Lançamento livre para a equipa BRANCA.",
            "c) Livre de 7 metrospara a equipa BRANCA.",
            "d) Exclusão de 2 minutos para o jogador nº. 2 da equipa PRETA.",
            "e) Desqualificação para o jogador nº. 2 da equipa PRETA (cartão vermelho mostrado pelos árbitros)."
        ],
        "correta": [
            0,
            1,
            3
        ],
        "regra": 4
    },
    {
        "pergunta": "4.61) O marcador está 29:29 com 10 segundos restantes no jogo para jogar. O guarda-redes nº. 12 da equipa BRANCA executa um lançamento de baliza e passa a bola para o jogador nº. 11 da equipa BRANCA. O jogador nº. 11 da equipa BRANCA vê que o jogador nº. 9 da equipa BRANCA está em uma posição isolado na linha de área de baliza da equipa PRETA. Ele passa a bola para o jogador nº. 9 da equipa BRANCA. Antes do jogador nº. 9 da equipa BRANCA rematar à baliza, o cronometrista interrompe o jogo por causa de uma substituição irregular. O jogador nº. 2 da equipa PRETA entrou em campo antes do jogador nº. 4 da equipa PRETA sair do mesmo. Qual é a decisão correta?",
        "opcoes": [
            "a) Time-out.",
            "b) Lançamento livre para a equipa BRANCA.",
            "c) Livre de 7 metros para a equipa BRANCA.",
            "d) Exclusão de 2 minutos para o jogador nº. 2 da equipa PRETA.",
            "e) Desqualificação para o jogador nº. 2 da equipa PRETA (cartão vermelho mostrado pelos pelos árbitros)."
        ],
        "correta": [
            0,
            2,
            3
        ],
        "regra": 4
    },
    {
        "pergunta": "5.1) O guarda-redes nº. 1 da equipa PRETA defende um remate à baliza e pretende iniciar um contra-ataque. Ao fazê-lo, ele cruza a linha de área de baliza com o pé esquerdo. Qual a decisão correta?",
        "opcoes": [
            "a) Jogo continua sem interrupção",
            "b) Lançamento livre para a equipa BRANCA",
            "c) Repetir lançamento de baliza após o sinal de apito"
        ],
        "correta": 2,
        "regra": 5
    },
    {
        "pergunta": "5.2) O guarda-redes nº. 12 da equipa BRANCA está de pé, fora da sua área de baliza, em campo. Ao receber a bola de um companheiro de equipa, o guarda-redes nº. 12 da equipa BRANCA dá um passo para trás e coloca um pé na área de baliza, enquanto o outro pé permanece onde está. Qual a decisão correta?",
        "opcoes": [
            "a) Livre de 7 metros para a equipa PRETA",
            "b) O jogo continua sem interrupção",
            "c) Lançamento livre para a equipa PRETA",
            "d) Exclusão de 2 minutos para o guarda-redes nº. 12 da equipa BRANCA"
        ],
        "correta": 2,
        "regra": 5
    },
    {
        "pergunta": "5.3) O guarda-redes nº. 12 da equipa BRANCA defende um remate e mergulha em direção à bola, que sai a rolar na direção da área de jogo. O guarda-redes nº. 12 da equipa BRANCA, agarra a bola enquanto desliza e atravessa a linha de área de baliza, e passa a bola na área de jogo para um companheiro de equipa. Qual a decisão correta?",
        "opcoes": [
            "a) Lançamento livre para a equipa PRETA .",
            "b) O jogo continua sem interrupção.",
            "c) Lançamento de baliza para a equipa BRANCA após o sinal de apito."
        ],
        "correta": 2,
        "regra": 5
    },
    {
        "pergunta": "5.4) O guarda-redes nº. 1 da equipa PRETA defende um remate à baliza. A bola vai a rolar para a área de jogo. Para impedir a bola de chegar ao jogador nº. 15 da equipa BRANCA, que está à espera junto à linha da área de baliza, ele desliza, jogando-a com um pé, pouco antes da bola chegar ao jogador nº. 15 da equipa BRANCA, de modo que a bola cruza a linha de saída de baliza. Qual a decisão correta?",
        "opcoes": [
            "a) Livre de 7 metros para a equipa BRANCA.",
            "b) Lançamento livre para a equipa BRANCA.",
            "c) O jogo continua sem interrupção.",
            "d) Sanção progressiva para o guarda-redes nº. 1 da equipa PRETA, por ter colocado em perigo um adversário."
        ],
        "correta": 1,
        "regra": 5
    },
    {
        "pergunta": "5.5) O guarda-redes nº. 12 da equipa BRANCA não conseguiu manter o controlo da bola. A bola rola dentro da área de baliza em direção à linha lateral. O guarda-redes usa o pé para jogar a bola, cruzando a linha de saída de baliza. Qual a decisão correta?",
        "opcoes": [
            "a) Lançamento de baliza para a equipa BRANCA.",
            "b) Lançamento livre para a equipa PRETA.",
            "c) Reposição de bola em jogo para a equipa PRETA.",
            "d) Sanção progressiva para o guarda-redes."
        ],
        "correta": 1,
        "regra": 5
    },
    {
        "pergunta": "5.6) O guarda-redes nº. 1 da equipa BRANCA defende um remate. A bola rola na direção da área de jogo, onde o jogador nº. 6 da equipa PRETA espera sozinho para agarrar a bola. O guarda-redes nº. 1 da equipa BRANCA consegue parar a bola com o pé, quando esta está prestes a atingir a linha da área de baliza. Qual a decisão correta?",
        "opcoes": [
            "a) Lançamento de baliza para a equipa BRANCA após o sinal de apito",
            "b) Sanção progressiva para o guarda-redes nº. 1 da equipa BRANCA.",
            "c) Lançamento livre para a equipa PRETA.",
            "d) Livre de 7 metros para a equipa PRETA."
        ],
        "correta": 2,
        "regra": 5
    },
    {
        "pergunta": "5.7) O jogador nº. 18 da equipa PRETA faz um remate à baliza. O remate é bloqueado pelo jogador nº. 7 da equipa BRANCA, de modo que a bola muda de direção e vai claramente no sentido da linha de saída de baliza, ainda dentro da área da baliza. O guarda-redes nº. 1 da equipa BRANCA corre para a bola e consegue fazê-la sair pela linha de saída de baliza, com o pé. Qual a decisão correta?",
        "opcoes": [
            "a) Lançamento de baliza para a equipa BRANCA",
            "b) Reposição de bola em jogo para a equipa PRETA",
            "c) Lançamento livre para a equipa PRETA",
            "d) Advertência para o guarda-redes nº. 1 da equipa BRANCA"
        ],
        "correta": 0,
        "regra": 5
    },
    {
        "pergunta": "5.8) O guarda-redes nº. 12 da equipa PRETA salta na sua área de baliza para agarrar um passe longo do jogador nº. 7 da equipa BRANCA. O guarda-redes nº. 12 da equipa PRETA agarra a bola enquanto está no ar e cai com a bola e com um pé na área de baliza e um pé na área de jogo. Desta posição ele passa a bola para o jogador nº. 3 da equipa PRETA. Qual a decisão correta?",
        "opcoes": [
            "a) Livre de 7 metrospara a equipa BRANCA.",
            "b) O jogo continua sem interrupção.",
            "c) Lançamento livre à equipa BRANCA.",
            "d) Correção e lançamento de baliza após o sinal de apito."
        ],
        "correta": 3,
        "regra": 5
    },
    {
        "pergunta": "5.9) O jogador nº. 9 da equipa BRANCA passa a bola para o guarda-redes nº. 1 da equipa BRANCA, que está em pé na área de jogo. Uma vez que o jogador nº. 9 da equipa BRANCA está sob pressão, ele joga a bola muito alta, de forma que o guarda-redes nº. 1 da equipa BRANCA, tem de entrar na área de baliza com um pé, imediatamente após apanhar a bola. Qual a decisão correta?",
        "opcoes": [
            "a) O jogo continua sem interrupção.",
            "b) Time-out.",
            "c) Livre de 7 metros para a equipa PRETA.",
            "d) Lançamento livre para a equipa PRETA."
        ],
        "correta": 3,
        "regra": 5
    },
    {
        "pergunta": "5.10) Os árbitros dão um lançamento livre para a equipa BRANCA na linha da área de baliza da equipa BRANCA. O guarda-redes nº. 1 da equipa BRANCA está de pé com um pé na área de baliza e um pé na área de jogo. Ele passa a bola para o jogador nº. 8 da equipa BRANCA, que marca um golo. Qual a decisão correta?",
        "opcoes": [
            "a) Golo para a equipa BRANCA.",
            "b) Repetição do lançamento livre fora da área de baliza da equipa BRANCA.",
            "c) Lançamento livre para a equipa PRETA na linha da área de baliza da equipa BRANCA.",
            "d) Lançamento de baliza para a equipa PRETA.",
            "e) Livre de 7 metros para a equipa BRANCA."
        ],
        "correta": 0,
        "regra": 5
    },
    {
        "pergunta": "5.11) O árbitro apita por causa de muitos passos dados pelo jogador nº. 21 da equipa PRETA. O jogador nº. 21 da equipa PRETA coloca a bola na linha de área de baliza da equipa BRANCA. O guarda-redes nº. 12 da equipa BRANCA quer jogar a bola rapidamente. Ele apoia-se com uma mão no chão na área de jogo, enquanto tem um pé no chão na área de baliza. A partir desta posição ele joga a bola para o jogador nº. 3 da equipa BRANCA, que começa um contra-ataque que leva a um golo para a equipa BRANCA. Qual a decisão correta?",
        "opcoes": [
            "a) Repetir o lançamento livre para a equipa BRANCA após o sinal de apito.",
            "b) Golo para a equipa BRANCA.",
            "c) Lançamento livre para a equipa PRETA por causa da execução ilegal do lançamento livre pelo guarda-redes nº. 12 da equipa BRANCA.",
            "d) Time-out."
        ],
        "correta": 0,
        "regra": 5
    },
    {
        "pergunta": "5.12) O guarda-redes nº. 1 da equipa PRETA deixou a sua área de baliza. Ele salta na área de jogo e agarra a bola a passe de um companheiro de equipa enquanto está no ar. Depois cai com os dois pés dentro de sua área de baliza. Qual a decisão correta?",
        "opcoes": [
            "a) O jogo continua sem interrupção.",
            "b) Lançamento de baliza para a equipa PRETA.",
            "c) Lançamento livre para a equipa BRANCA.",
            "d) Livre de 7 metros para a equipa BRANCA.",
            "e) Time-out."
        ],
        "correta": 2,
        "regra": 5
    },
    {
        "pergunta": "5.13) A bola está no chão imediatamente fora da área de baliza da equipa BRANCA. O guarda-redes nº. 1 da equipa BRANCA está de pé dentro da área de baliza e agarra a bola para impedir que um adversário o faça. Qual a decisão correta?",
        "opcoes": [
            "a) Lançamento livre para a equipa PRETA.",
            "b) Livre de 7 metros para a equipa PRETA.",
            "c) Sanção progressiva para o guarda-redes nº. 1 da equipa BRANCA.",
            "d) Nenhuma intervenção porque esta ação é permitida."
        ],
        "correta": 0,
        "regra": 5
    },
    {
        "pergunta": "6.1) A bola encontra-se na linha de área da baliza. O jogador nº. 7 da equipa BRANCA pega-lhe e tenta marcar um golo. O jogador nº. 7 da equipa BRANCA tem uma clara hipótese de marcar, quando é ilegalmente bloqueado. Qual a decisão correta?",
        "opcoes": [
            "a) Lançamento livre para a equipa PRETA",
            "b) Lançamento livre para a equipa BRANCA",
            "c) Livre de 7 metros para a equipa BRANCA",
            "d) Lançamento de baliza para a equipa PRETA"
        ],
        "correta": 3,
        "regra": 6
    },
    {
        "pergunta": "6.2) A bola está a rolar na área de baliza da equipa BRANCA. O jogador nº. 8 da equipa PRETA agarra a bola e marca um golo. Qual a decisão correta?",
        "opcoes": [
            "a) Lançamento livre para a equipa BRANCA",
            "b) Lançamento de baliza para a equipa BRANCA",
            "c) Golo",
            "d) Lançamento de saída"
        ],
        "correta": 1,
        "regra": 6
    },
    {
        "pergunta": "6.3) O jogador nº. 3 da equipa BRANCA está em pé com ambos os pés na área de jogo e agarra a bola que vem do seu guarda-redes. Quando o jogador nº. 3 da equipa BRANCA é bloqueado corretamente pelo jogador nº. 10 da equipa PRETA, dribla a bola diversas vezes na sua própria área da baliza. Qual a decisão correta?",
        "opcoes": [
            "a) O jogo continua sem interrupção",
            "b) Livre de 7 metros para a equipa PRETA",
            "c) Lançamento livre para a equipa PRETA",
            "d) Lançamento livre para a equipa BRANCA"
        ],
        "correta": 0,
        "regra": 6
    },
    {
        "pergunta": "6.4) O jogador nº. 7 da equipa BRANCA, está de pé fora da área de baliza da equipa PRETA, mas agarra a bola, que está claramente no ar, por cima da área de baliza e marca golo. Qual a decisão correta?",
        "opcoes": [
            "a) Golo para a equipa BRANCA",
            "b) Lançamento livre para a equipa PRETA",
            "c) Lançamento de baliza para a equipa PRETA",
            "d) Lançamento de baliza para a equipa PRETA após o sinal de apito"
        ],
        "correta": 0,
        "regra": 6
    },
    {
        "pergunta": "6.5) O jogador nº. 8 da equipa BRANCA, que é bloqueado corretamente por vários adversários, intencionalmente rola a bola na direção da sua própria área de baliza, onde a bola vem a parar. O guarda-redes nº. 1 da equipa BRANCA não apanha a bola. Qual a decisão correta?",
        "opcoes": [
            "a) Lançamento de baliza para a equipa BRANCA",
            "b) Lançamento de baliza para a equipa BRANCA após o sinal de apito",
            "c) Livre de 7 metros para a equipa PRETA",
            "d) Lançamento livre para a equipa PRETA"
        ],
        "correta": 3,
        "regra": 6
    },
    {
        "pergunta": "6.6) O jogador nº. 5 da equipa BRANCA, passa a bola para a área de baliza da sua própria equipa. A bola atinge o poste e vem a rolar para a área de jogo. O guarda-redes nº. 12 da equipa BRANCA, agarra a bola e passa para o jogador nº. 7 da equipa BRANCA, que marca um golo. Qual a decisão correta?",
        "opcoes": [
            "a) Livre de 7 metros para a equipa PRETA",
            "b) Golo",
            "c) Lançamento livre para a equipa PRETA",
            "d) Lançamento de baliza para a equipa BRANCA"
        ],
        "correta": 2,
        "regra": 6
    },
    {
        "pergunta": "6.7) A equipa PRETA marcou um golo e o jogador nº. 10 da equipa BRANCA executa o lançamento de saída. Ele não encontra nenhum companheiro de equipa disponível, e então ele surpreende o seu guarda-redes nº. 12 da equipa BRANCA, jogando-lhe a bola de volta. O guarda-redes está em pé na sua área de baliza. O guarda-redes nº. 12 da equipa BRANCA, agarra na bola e passa para o jogador nº. 9 da equipa BRANCA. Qual a decisão correta?",
        "opcoes": [
            "a) O jogo continua sem interrupção",
            "b) Livre de 7 metros para a equipa PRETA",
            "c) Lançamento livre para a equipa PRETA",
            "d) Repetir o lançamento de saída após a correção"
        ],
        "correta": 2,
        "regra": 6
    },
    {
        "pergunta": "6.8) O jogador nº. 7 da equipa PRETA vê que o jogador nº. 9 da equipa BRANCA vai ficar isolado frente ao guarda-redes se receber a bola. Então, tendo feito a mesma coisa anteriormente, ele corre através da sua área de baliza para chegar perto do jogador nº. 9 da equipa BRANCA, de forma a que este não possa receber o passe. O jogador nº. 7 da equipa PRETA já está novamente fora da sua linha da área de baliza, quando o jogador nº. 9 da equipa BRANCA recebe a bola. O jogador nº. 9 da equipa BRANCA vira-se e corre contra o jogador nº. 7 da equipa PRETA. Qual a decisão correta?",
        "opcoes": [
            "a) Livre de 7 metros para a equipa BRANCA.",
            "b) Lançamento livre para a equipa BRANCA.",
            "c) Lançamento livre para a equipa PRETA.",
            "d) Sanção progressiva para o jogador nº. 7 da equipa PRETA."
        ],
        "correta": [
            0,
            3
        ],
        "regra": 6
    },
    {
        "pergunta": "6.9) A bola ressalta do guarda-redes nº. 1 da equipa PRETA, para o jogador nº. 4 da equipa BRANCA que está à espera fora da linha de área de baliza. Para evitar uma clara hipótese de marcar o jogador nº. 2 da equipa PRETA entra na área de baliza e impede que o jogador nº. 4 da equipa BRANCA receba a bola. Qual a decisão correta?",
        "opcoes": [
            "a) Lançamento livre para a equipa BRANCA.",
            "b) Livre de 7 metros para a equipa BRANCA.",
            "c) Sanção progressiva para o jogador nº. 2 da equipa PRETA.",
            "d) Desqualificação do jogador nº. 2 da equipa PRETA (cartão vermelho mostrado pelos árbitros)."
        ],
        "correta": 1,
        "regra": 6
    },
    {
        "pergunta": "6.10) O jogador nº. 10 da equipa BRANCA passa a bola em direção da sua própria área de baliza. O guarda-redes nº. 1 da equipa BRANCA salta da área de baliza e agarra a bola no ar. O guarda-redes nº. 1 da equipa BRANCA, agarra firmemente a bola e cai fora da área de baliza. Qual a decisão correta?",
        "opcoes": [
            "a) O jogo continua sem interrupção.",
            "b) Lançamento de baliza para a equipa BRANCA.",
            "c) Lançamento livre para a equipa PRETA.",
            "d) Livre de 7 metros para a equipa PRETA."
        ],
        "correta": 2,
        "regra": 6
    },
    {
        "pergunta": "6.11) A bola é passada do jogador nº. 11 da equipa BRANCA, de volta para a área de baliza, onde o guarda-redes nº. 1 da equipa BRANCA, salta e apanha a bola no ar. O guarda-redes nº. 1 da equipa BRANCA agarra na bola firmemente e cai com um pé dentro da área de baliza e com um pé fora da mesma. Qual a decisão correta?",
        "opcoes": [
            "a) O jogo continua sem interrupção.",
            "b) Lançamento de baliza para a equipa BRANCA.",
            "c) Lançamento livre para a equipa PRETA.",
            "d) Livre de 7 metros para a equipa PRETA."
        ],
        "correta": 2,
        "regra": 6
    },
    {
        "pergunta": "6.12) O jogador nº. 7 da equipa BRANCA, que está no ataque, está na posse da bola e entra com a bola na área de baliza da equipa PRETA. Qual a decisão correta?",
        "opcoes": [
            "a) Lançamento livre para a equipa PRETA.",
            "b) Lançamento de baliza para a equipa PRETA.",
            "c) Lançamento de baliza para a equipa PRETA após o sinal de apito.",
            "d) Lançamento livre para a equipa PRETA após o sinal de apito."
        ],
        "correta": 1,
        "regra": 6
    },
    {
        "pergunta": "6.13) A bola está no chão na área de baliza da equipa BRANCA. Nessa altura o cronometrista apita e explica que o jogador nº. 5 da equipa BRANCA fez uma substituição irregular. Qual a decisão correta?",
        "opcoes": [
            "a) Lançamento de baliza para a equipa BRANCA.",
            "b) Exclusão de 2 minutos para o jogador nº. 5 da equipa BRANCA.",
            "c) Lançamento livre para a equipa PRETA na linha de lançamento livre da equipa BRANCA.",
            "d) Lançamento livre para a equipa PRETA na área de substituição da equipa BRANCA."
        ],
        "correta": [
            0,
            1
        ],
        "regra": 6
    },
    {
        "pergunta": "6.14) Em qual dos seguintes casos deve ser concedido um lançamento de baliza?",
        "opcoes": [
            "a) Quando um jogador da equipa atacante, que tem a bola, pisa a área de baliza dos adversários.",
            "b) Quando um jogador da equipa atacante, sem a bola, pisa a área de baliza dos adversários e ganha uma vantagem ao fazê-lo.",
            "c) Quando um jogador da equipa atacante, desvia a bola para fora através da linha de saída de baliza dos adversários.",
            "d) Quando um jogador com a bola pisa a área de baliza da sua própria equipa."
        ],
        "correta": [
            0,
            1,
            2
        ],
        "regra": 6
    },
    {
        "pergunta": "6.15) A equipa BRANCA está no ataque. O jogador nº. 4 da equipa PRETA está na linha da área de baliza. A bola está no ar, e o jogador nº. 4 da equipa PRETA direciona a bola para a área de baliza. A bola é tocada pelo guarda-redes nº. 1 da equipa PRETA, e depois cruza a linha de saída de baliza. Qual a decisão correta?",
        "opcoes": [
            "a) Reposição de bola em jogo para a equipa BRANCA.",
            "b) Lançamento livre para a equipa BRANCA.",
            "c) Livre de 7 metros para a equipa BRANCA.",
            "d) Lançamento de baliza para a equipa PRETA.",
            "e) Sanção progressiva para o jogador nº. 4 da equipa PRETA."
        ],
        "correta": 1,
        "regra": 6
    },
    {
        "pergunta": "6.16) O guarda-redes nº. 12 da equipa BRANCA defende um remate e tem a bola sob controlo na sua área de baliza. Ele ainda tem a bola nas mãos quando o cronometrista apita para uma substituição irregular do jogador nº. 10 da equipa BRANCA. Qual a decisão correta?",
        "opcoes": [
            "a) Lançamento livre para a equipa PRETA na área de substituição da equipa BRANCA.",
            "b)Time-out.",
            "c) Lançamento de baliza para a equipa BRANCA.",
            "d) Exclusão de 2 minutos para o jogador nº. 10 da equipa BRANCA.",
            "e) Lançamento livre para a equipa PRETA na linha de lançamento livre da equipa BRANCA."
        ],
        "correta": [
            1,
            2,
            3
        ],
        "regra": 6
    },
    {
        "pergunta": "6.17) O guarda-redes nº. 12 da equipa BRANCA, salta na área de jogo, perto da sua área de baliza, agarra a bola no ar, que lhe foi passada pelo jogador nº. 4 da equipa BRANCA, e joga a bola para fora que sai sobre a linha de saída de baliza. Depois cai dentro da área de baliza. Qual a decisão correta?",
        "opcoes": [
            "a) Lançamento de baliza para a equipa BRANCA.",
            "b) Reposição de bola em jogo para a equipa PRETA.",
            "c) Lançamento livre para a equipa PRETA.",
            "d) Advertência para o guarda-redes nº. 12 da equipa BRANCA."
        ],
        "correta": 1,
        "regra": 6
    },
    {
        "pergunta": "6.18) O jogador nº. 9 da equipa BRANCA, remata à baliza da equipa PRETA. O guarda-redes nº. 1 da equipa PRETA defende o remate, e a bola sai a rolar para a área de jogo, onde um jogador da equipa PRETA está pronto para agarrar a bola. Como o guarda-redes nº. 1 da equipa PRETA ficou lesionado ao defender o remate, os árbitros interrompem o jogo, enquanto a bola ainda está na área de baliza. Qual a decisão correta?",
        "opcoes": [
            "a) Lançamento livre para a equipa BRANCA.",
            "b) Lançamento de baliza para a equipa PRETA.",
            "c) Lançamento livre para a equipa PRETA."
        ],
        "correta": 2,
        "regra": 6
    },
    {
        "pergunta": "6.19) A bola está a rolar no chão na área de baliza da equipa BRANCA. Neste momento, o cronometrista apita e explica, que o jogador nº. 5 da equipa BRANCA fez uma substituição irregular. Qual a decisão correta?",
        "opcoes": [
            "a) Lançamento de baliza para a equipa BRANCA.",
            "b) Exclusão de 2 minutos para o jogador nº. 5 da equipa BRANCA.",
            "c) Lançamento livre para a equipa PRETA na linha de lançamento livre da equipa BRANCA.",
            "d) Lançamento livre para a equipa PRETA na área de substituição da equipa BRANCA."
        ],
        "correta": [
            1,
            2
        ],
        "regra": 6
    },
    {
        "pergunta": "6.20) O jogador nº. 5 da equipa BRANCA faz um remate à baliza. O remate é defendido pelo guarda-redes nº. 12 da equipa PRETA e a bola vai para o ar sobre a área de baliza, na direção do jogador pivot nº. 11 da equipa BRANCA, que está de pé junto à linha da área de baliza, sozinho e pronto para agarrar a bola. O jogador nº. 2 da equipa PRETA, salta na direção da bola, e enquanto paira no ar sobre a área de baliza, joga a bola na direção da linha lateral. Por causa da resina, a bola para na área de baliza sem que o guarda-redes lhe toque. Qual a decisão correta?",
        "opcoes": [
            "a) Lançamento de baliza para a equipa PRETA.",
            "b) Lançamento livre para a equipa BRANCA.",
            "c) Livre de 7 metros para a equipa BRANCA.",
            "d) Sanção progressiva para o Jogador nº.2 da equipa PRETA."
        ],
        "correta": 1,
        "regra": 6
    },
    {
        "pergunta": "6.21) O guarda-redes nº. 1 da equipa PRETA, defendeu um remate e quer passar a bola para o jogador nº. 6 da equipa PRETA, que está pronto para um contra-ataque rápido. Quando o guarda-redes nº. 1 da equipa PRETA faz o passe, pisa a linha da área de baliza. O jogador nº. 6 da equipa PRETA, recebe a bola e marca um golo. Qual a decisão correta?",
        "opcoes": [
            "a) O golo é válido.",
            "b) Lançamento livre para a equipa BRANCA.",
            "c) Correção e repetição do lançamento de baliza após o apito.",
            "d) O golo não é válido."
        ],
        "correta": 0,
        "regra": 6
    },
    {
        "pergunta": "6.22) O jogador nº. 6 da equipa BRANCA está num contra-ataque. Ele salta, faz um remate à baliza e cai na área de baliza da equipa PRETA. O guarda-redes nº. 12 da equipa PRETA, defende o remate, e a bola vai para o jogador nº. 11 da equipa BRANCA, que marca um golo, enquanto o jogador nº. 6 da equipa BRANCA está deitado na área de baliza entre ele e o guarda-redes nº. 12 da equipa PRETA. Qual a decisão correta?",
        "opcoes": [
            "a) Golo para a equipa BRANCA.",
            "b) Lançamento de baliza para a equipa PRETA.",
            "c) Lançamento livre para a equipa PRETA."
        ],
        "correta": 1,
        "regra": 6
    },
    {
        "pergunta": "6.23) A equipa BRANCA está no ataque e a jogar sem guarda-redes. O jogador nº. 11 da equipa BRANCA remata à baliza. O guarda-redes nº. 1 da equipa PRETA defende o remate. Então, executa o lançamento de baliza como um remate direto à baliza sem guarda-redes. O jogador nº. 10 da equipa BRANCA, tenta defender o remate. Este, salta de fora da sua própria área de baliza e enquanto no ar sobre a área de baliza toca na bola. A bola cruza a linha de saída de baliza. Depois de tocar na bola, o jogador nº.10 da equipa BRANCA cai dentro da área de baliza. Qual é a decisão correta?",
        "opcoes": [
            "a) Lançamento de baliza para o guarda-redes da equipa BRANCA.",
            "b) Lançamento livre para a equipa PRETA.",
            "c) Livre de 7 metros para a equipa PRETA.",
            "d) Lançamento de reposição de bola em jogo para a equipa PRETA.",
            "e) Sanção progressiva para jogador nº. 10 da equipa BRANCA."
        ],
        "correta": 3,
        "regra": 6
    },
    {
        "pergunta": "6.24) A equipa BRANCA está no ataque e a jogar sem guarda-redes. O jogador nº. 11 da equipa BRANCA remata à baliza. O guarda-redes nº. 1 da equipa PRETA defende o remate. Então, executa o lançamento de baliza como um remate direto à baliza vazia. O jogador nº. 10 da equipa BRANCA tenta defender o remate. Ele salta de fora da sua própria área de baliza e enquanto no ar sobre a área de baliza, agarra a bola e cai dentro da área de baliza com a bola nas mãos. Qual é a decisão correta?",
        "opcoes": [
            "a) Lançamento livre para a equipa PRETA.",
            "b) Livre de 7 metros para a equipa PRETA.",
            "c) Exclusão direta de 2 minutos para o jogador nº. 10 da equipa BRANCA."
        ],
        "correta": [
            1,
            2
        ],
        "regra": 6
    },
    {
        "pergunta": "7.1) A bola está no ar e vai na direção da linha lateral. O jogador nº. 3 da equipa BRANCA consegue agarrar a bola com a sua mão e passá-la ao jogador nº. 7 da equipa BRANCA, antes da bola cruzar a linha. Para isso, o jogador nº. 3 da equipa BRANCA ultrapassa com um pé a linha lateral. O jogador nº. 7 da equipa BRANCA recebe a bola e marca um golo. Qual a decisão correta?",
        "opcoes": [
            "a) Reposição de bola em jogo para a equipa PRETA.",
            "b) Lançamento livre para a equipa PRETA.",
            "c) Golo.",
            "d) Exclusão de 2 minutos para o jogador nº. 3 da equipa BRANCA."
        ],
        "correta": 1,
        "regra": 7
    },
    {
        "pergunta": "7.2) Passe arriscado do jogador nº. 3 da equipa PRETA para o jogador nº. 11 da equipa PRETA. Quando a bola está no ar, o jogador nº. 11 da equipa PRETA percebe que não será capaz de agarrar a bola e então bate na bola com o punho para servir o jogador nº. 9 da equipa PRETA, que está parado no meio do campo.  Qual a decisão correta?",
        "opcoes": [
            "a) O jogo continua sem interrupção.",
            "b) Lançamento livre para a equipa BRANCA da posição do jogador nº. 9 da equipa PRETA.",
            "c) Lançamento livre para a equipa BRANCA da posição do jogador nº. 11 da equipa PRETA.",
            "d) Exclusão de 2 minutos para o jogador nº. 11 da equipa PRETA."
        ],
        "correta": 0,
        "regra": 7
    },
    {
        "pergunta": "7.3) O jogador nº. 4 da equipa BRANCA, agarra a bola em pé. Ele então salta e cai com o pé direito, depois salta novamente e cai com o pé esquerdo para rematar. Quantos passos dá o jogador nº. 4 da equipa BRANCA?",
        "opcoes": [
            "a) 1",
            "b) 2",
            "c) 3",
            "d) 4"
        ],
        "correta": 1,
        "regra": 7
    },
    {
        "pergunta": "7.4) Um jogador salta para agarrar a bola que lhe foi passada por um colega de equipa. Depois do salto, coloca ambos os pés no chão. Depois, levanta o pé direito para dar um passo para o lado e arrasta o pé esquerdo até à posição do pé direito. Quantos passos ele dá?",
        "opcoes": [
            "a) 1",
            "b) 3",
            "c) 0",
            "d) 2"
        ],
        "correta": 0,
        "regra": 7
    },
    {
        "pergunta": "7.5) Um jogador agarra a bola no ar, que lhe foi passada por um companheiro de equipa. Depois do salto, coloca o pé direito no chão e não se move. De seguida coloca o pé esquerdo no chão e depois o direito para rematar. Quantos passos ele dá?",
        "opcoes": [
            "a) 3",
            "b) 2",
            "c) 1",
            "d) 0"
        ],
        "correta": 1,
        "regra": 7
    },
    {
        "pergunta": "7.6) O jogador nº. 5 da equipa BRANCA, está atrapalhado com a bola, mas finalmente consegue controlá-la. De seguida, dá três passos, dribla a bola uma vez e dá mais três passos antes de marcar um golo. Qual a decisão correta?",
        "opcoes": [
            "a) Lançamento livre para a equipa PRETA.",
            "b) Golo.",
            "c) Lançamento de baliza para a equipa PRETA.",
            "d) Reposição de bola em jogo para a equipa PRETA."
        ],
        "correta": 1,
        "regra": 7
    },
    {
        "pergunta": "7.7) O jogador nº. 5 da equipa BRANCA, quer iniciar um ataque. Dribla a bola repetidamente enquanto dá 5 passos. Então, agarra a bola novamente para passá-la. Qual a decisão correta?",
        "opcoes": [
            "a) Lançamento livre para a equipa PRETA.",
            "b) Lançamento livre para a equipa BRANCA.",
            "c) O jogo continua sem interrupção.",
            "d) Livre de 7 metros para a equipa PRETA."
        ],
        "correta": 2,
        "regra": 7
    },
    {
        "pergunta": "7.8) O jogador nº. 6 da equipa PRETA, agarra a bola, escorrega e cai. Deitado no chão de costas, passa a bola para o jogador nº. 9 da equipa PRETA. Qual a decisão correta?",
        "opcoes": [
            "a) Lançamento livre para a equipa BRANCA.",
            "b) O jogo continua sem interrupção.",
            "c) Lançamento livre para a equipa PRETA."
        ],
        "correta": 1,
        "regra": 7
    },
    {
        "pergunta": "7.9) O jogador nº. 3 da equipa BRANCA, corre entre dois adversários para colocar a bola na direção do seu trajeto. Ele agarra a bola novamente, antes de esta ter tocado no chão. Agora há espaço aberto até à baliza da equipa PRETA. O Jogador nº. 3 da equipa BRANCA, dribla a bola uma vez e marca. Qual a decisão correta?",
        "opcoes": [
            "a) Golo.",
            "b) Lançamento livre para a equipa PRETA.",
            "c) Lançamento de baliza para a equipa PRETA."
        ],
        "correta": 1,
        "regra": 7
    },
    {
        "pergunta": "7.10) Depois de driblar a bola uma vez, o jogador nº. 7 da equipa BRANCA quer passar a bola para o jogador nº. 5 da equipa BRANCA, mas o jogador nº. 5 da equipa BRANCA está tapado por um adversário. O jogador nº. 7 da equipa BRANCA, fica tão confuso de tal forma que deixa cair a bola, mas consegue agarrá-la novamente antes de ter tocado no chão. Qual a decisão correta?",
        "opcoes": [
            "a) O jogo continua sem interrupção.",
            "b) Lançamento livre para a equipa PRETA.",
            "c) Lançamento livre para a equipa BRANCA."
        ],
        "correta": 1,
        "regra": 7
    },
    {
        "pergunta": "7.11) Como deve ser penalizado o jogo passivo recorrente?",
        "opcoes": [
            "a) Lançamento livre e advertência.",
            "b) Lançamento livre e exclusão de 2 minutos.",
            "c) Lançamento livre.",
            "d) Lançamento livre e desqualificação (cartão vermelho mostrado pelos árbitros)."
        ],
        "correta": 2,
        "regra": 7
    },
    {
        "pergunta": "7.12) Na sequência de um remate à baliza pelo jogador nº. 4 da equipa BRANCA, a bola bate no poste da baliza da equipa PRETA, atinge o árbitro que está de pé, dentro da área de baliza e devido a isso, a bola cruza a linha lateral e não a linha de saída de baliza. Qual a decisão correta?",
        "opcoes": [
            "a) Lançamento livre para a equipa BRANCA.",
            "b) Reposição de bola em jogo para a equipa PRETA.",
            "c) Lançamento de baliza para a equipa PRETA"
        ],
        "correta": 1,
        "regra": 7
    },
    {
        "pergunta": "7.13) A equipa BRANCA executa uma reposição de bola em jogo. O jogador nº. 5 da equipa BRANCA joga a bola para o campo, e atinge o árbitro fazendo com que a bola cruze a linha de golo da equipa PRETA. Qual a decisão correta?",
        "opcoes": [
            "a) Repetir a reposição após o sinal de apito.",
            "b) Lançamento livre para a equipa PRETA.",
            "c) Lançamento livre para a equipa BRANCA.",
            "d) Golo para a equipa BRANCA."
        ],
        "correta": 3,
        "regra": 7
    },
    {
        "pergunta": "7.14) O jogador nº. 3 da equipa PRETA, faz um remate enquanto salta, e o jogador nº. 9 da equipa BRANCA bloqueia a bola. A bola cai no chão, e o jogador nº. 9 da equipa BRANCA pega-lhe com as duas mãos e começa a driblar num contra-ataque. Ele remata e marca golo. Qual a decisão correta?",
        "opcoes": [
            "a) Golo para a equipa BRANCA.",
            "b) Lançamento livre para a equipa PRETA.",
            "c) Exclusão de 2 minutos para o jogador nº. 9 da equipa BRANCA.",
            "d) Time-out."
        ],
        "correta": 0,
        "regra": 7
    },
    {
        "pergunta": "7.15) O jogador nº. 5 da equipa BRANCA dribla a bola ao longo da linha lateral. É bloqueado corretamente pela equipa PRETA. Para passar pelo jogador nº. 2 da equipa PRETA, o jogador nº. 5 da equipa BRANCA, ultrapassa a linha lateral com um pé durante o seu drible. Qual a decisão correta?",
        "opcoes": [
            "a) Lançamento livre para a equipa BRANCA.",
            "b) Reposição de bola em jogo lateral para a equipa PRETA.",
            "c) Lançamento livre para a equipa PRETA.",
            "d) O jogo continua sem interrupção."
        ],
        "correta": 2,
        "regra": 7
    },
    {
        "pergunta": "7.16) Após um passe impreciso do jogador nº. 3 da equipa BRANCA para o jogador nº. 9 da equipa BRANCA, a bola rola para a linha lateral perto da área de substituição da equipa BRANCA. O jogador nº. 10 da equipa PRETA, está a um metro de distância e disponível para agarrar a bola, quando o jogador nº. 9 da equipa BRANCA mergulha para a bola e bate-lhe com o punho em direção ao centro do campo de jogo, de volta ao jogador nº. 3 da equipa BRANCA. Posteriormente, este movimento faz com que o jogador nº. 9 da equipa BRANCA, deslize sobre a linha lateral para fora do campo. Qual a decisão correta?",
        "opcoes": [
            "a) O jogo continua sem interrupção.",
            "b) Lançamento livre para a equipa PRETA.",
            "c) Sanção progressiva para o jogador nº. 9 da equipa BRANCA.",
            "d) Reposição de bola em jogo para a equipa PRETA."
        ],
        "correta": 0,
        "regra": 7
    },
    {
        "pergunta": "7.17) O Jogador nº. 7 da equipa PRETA, que está a atacar, assume uma posição fora do campo sem ter a bola. Os árbitros indicam ao jogador que ele deve voltar ao campo, mas ele não reage. Qual a decisão correta?",
        "opcoes": [
            "a) O jogo continua sem interrupção.",
            "b) Lançamento livre para a equipa BRANCA.",
            "c) Sanção progressiva para o jogador nº. 7 da equipa PRETA.",
            "d) Reposição de bola em jogo para a equipa BRANCA."
        ],
        "correta": 1,
        "regra": 7
    },
    {
        "pergunta": "7.18) Um jogador salta sobre a área de baliza dos adversários. Ele tem o controlo total da bola e do corpo, e está numa boa posição para rematar. No entanto, em vez de rematar, ele vira-se no ar e passa a bola de volta para um companheiro de equipa, que passa a bola a outro. Qual a decisão correta?",
        "opcoes": [
            "a) Sinal advertindo para o jogo passivo",
            "b) Imediatamente lançamento livre por causa do jogo passivo.",
            "c) Imediatamente lançamento livre por causa de conduta antidesportiva.",
            "d) Sanção progressiva."
        ],
        "correta": 1,
        "regra": 7
    },
    {
        "pergunta": "7.19) O jogador nº. 3 da equipa BRANCA, faz um remate à baliza da equipa PRETA e atinge o poste da baliza. A bola rola para fora da área de baliza. Na linha de lançamento livre, o jogador nº. 3 da equipa BRANCA e o jogador nº. 4 da equipa PRETA mergulham para a bola, sem se colocarem em perigo um ao outro. O jogador nº. 4 da equipa PRETA, consegue empurrar a bola para o jogador nº. 6 da equipa PRETA, que começa um contra-ataque e marca um golo. Qual a decisão correta?",
        "opcoes": [
            "a) Advertência para o jogador nº. 4 da equipa PRETA.",
            "b) Golo para a equipa PRETA.",
            "c) Lançamento livre para a equipa BRANCA ou para a equipa PRETA dependendo das circunstâncias.",
            "d) Lançamento de baliza para a equipa PRETA."
        ],
        "correta": 1,
        "regra": 7
    },
    {
        "pergunta": "7.20) O jogador nº. 10 da equipa BRANCA, tenta passar a bola para o jogador nº. 8 da equipa BRANCA, que está na linha da área de baliza da equipa PRETA. O jogador nº. 10 da equipa PRETA, está de pé completamente imóvel na frente do jogador nº. 8 da equipa BRANCA, quando a bola lhe atinge o pé. Qual a decisão correta?",
        "opcoes": [
            "a) Lançamento livre para a equipa BRANCA.",
            "b) O jogo continua sem interrupção.",
            "c) Depende, de quem apanha a bola."
        ],
        "correta": 1,
        "regra": 7
    },
    {
        "pergunta": "7.21) O jogador nº. 15 da equipa BRANCA, bloqueia um passe do jogador nº. 9 da equipa PRETA, depois disso a bola rola no chão. O jogador nº. 15 da equipa BRANCA e o jogador nº. 9 da equipa PRETA, mergulham para a bola, o jogador nº. 15 da equipa BRANCA agarra a bola e mergulha no chão. Ele levanta-se, dá 3 passos com a bola e passa a bola para um companheiro de equipa, que marca um golo. Qual a decisão correta?",
        "opcoes": [
            "a) Golo para a equipa BRANCA.",
            "b) Lançamento livre para a equipa PRETA."
        ],
        "correta": 0,
        "regra": 7
    },
    {
        "pergunta": "7.22) A equipa BRANCA está a ganhar por 24-23 ao minuto 57 mas tem um jogador a menos em campo do que a equipa PRETA. O árbitro central apitou um lançamento livre a favor do jogador nº. 3 da equipa BRANCA. O jogador nº. 6 da equipa BRANCA tenta executar o lançamento livre a vários metros de distância do local correto, ainda que o árbitro tenha mostrado muito claramente o local onde a falta foi cometida. Qual a decisão correta?",
        "opcoes": [
            "a) Correção da posição, sinal de apito para retomar, nenhuma outra ação.",
            "b) Correção da posição, sinal de apito para retomar, os árbitros mostram o sinal de advertência de jogo passivo.",
            "c) Correção da posição, sanção progressiva para o jogador nº. 6 da equipa BRANCA, sinal de apito para retomar, os árbitros mostram o sinal de advertência de jogo passivo."
        ],
        "correta": 1,
        "regra": 7
    },
    {
        "pergunta": "7.23) A equipa PRETA está a jogar com um jogador a menos. Os jogadores da equipa PRETA já tomaram as suas posições no ataque e começaram a fase de construção. Agora, o jogador nº. 6 da equipa PRETA e o jogador nº. 8 da equipa PRETA, decidem deixar o campo para uma substituição. Qual a decisão correta?",
        "opcoes": [
            "a) Sinal de jogo passivo.",
            "b) Sinal de jogo passivo, se não houver aumento de fluxo de jogo dentro de 5 segundos.",
            "c) Imediatamente lançamento livre para a equipa BRANCA por causa do jogo passivo.",
            "d) Advertência para o jogador nº. 6 da equipa PRETA ou para o jogador nº. 8 da equipa PRETA em caso de repetição.",
            "e) Exclusão de 2 minutos para o jogador nº. 6 da equipa PRETA ou para o jogador nº. 8 da equipa PRETA em caso de repetição."
        ],
        "correta": 0,
        "regra": 7
    },
    {
        "pergunta": "7.24) Que ações anulam o sinal de jogo passivo?",
        "opcoes": [
            "a) Posse de bola renovada para a equipa atacante, depois do guarda-redes defender um livre de 7 metros.",
            "b) Posse de bola renovada para a equipa atacante, depois da bola bater na trave ou noposte da baliza.",
            "c) Time-out da equipa.",
            "d) Ação vibrante antes das próximas ações passivas da equipa.",
            "e) Qualquer uma das ações (a-d)."
        ],
        "correta": [
            0,
            1
        ],
        "regra": 7
    },
    {
        "pergunta": "7.25) Qual das seguintes afirmações está correta em relação ao sinal de advertência de jogo passivo (sinal manual IHF nº. 17)?",
        "opcoes": [
            "a) Se é notada uma tendência para o jogo passivo, este é mostrado pela primeira vez pelo árbitro de baliza, usando o sinal manual nº. 17. O árbitro central levanta então o seu braço da mesma forma.",
            "b) Se a equipa na posse da bola solicita um time-out de equipa após o sinal deadvertência ser mostrado, em seguida o sinal de advertência deve ser mostrado novamente,quando o jogo é retomado.",
            "c) Se a equipa na posse da bola não faz nenhum esforço claro para chegar a uma posiçãopara rematar à baliza, depois do sinal de advertência ser mostrado, então o árbitro centralou o árbitro de baliza dá um lançamento livre, devido ao jogo passivo.",
            "d) Após o sinal de advertência ser mostrado, os árbitros decidem sobre jogo passivo, omaistardar, quando após 4 passes não existe nenhum remate à baliza."
        ],
        "correta": [
            1,
            2,
            3
        ],
        "regra": 7
    },
    {
        "pergunta": "7.26) A equipa BRANCA atrasa a execução de um lançamento de saída. A equipa já foi avisada para esta tática mais cedo. Qual a decisão correta?",
        "opcoes": [
            "a) O jogo continua sem interrupção",
            "b) Time-out; lançamento de saída após o sinal de apito",
            "c) Time-out; lançamento de saída após o sinal de apito, sinal manual imediato para o jogo passivo",
            "d) Sinal de apito para o lançamento de saída, sinal manual imediato para o jogo passivo",
            "e) Sanção progressiva para o oficial responsável da equipa BRANCA"
        ],
        "correta": 3,
        "regra": 7
    },
    {
        "pergunta": "7.27) Qual das seguintes afirmações sobre a utilização do sinal de advertência de jogo passivo está/estão corretas?",
        "opcoes": [
            "a) O sinal de advertência deve sempre ser interrompido, quando é dada uma sanção progressiva a um oficial da equipa na defesa.",
            "b) Quando o sinal é mostrado pela primeira vez durante um ataque, os braços devem ser baixados após cerca de 10 segundos.",
            "c) O sinal deve ser repetido, como um lembrete, após a primeira interrupção, se tiver sido mostrado antes da interrupção.",
            "d) O sinal de jogo passivo deve sempre ser interrompido, quando um jogador da equipa à defesa recebe uma sanção progressiva.",
            "e) Os árbitros devem mostrar o sinal de advertência, quando um jogador tem a bola claramente controlada."
        ],
        "correta": [
            0,
            3,
            4
        ],
        "regra": 7
    },
    {
        "pergunta": "7.28) Qual das seguintes afirmações sobre o jogo passivo está correta?",
        "opcoes": [
            "a) A uma equipa não deve ser permitida mais de 5 segundos para passar da fase de construção até a fase de execução",
            "b) Os árbitros devem estar cientes das substituições lentas e tardias, depois do lançamento de saída já ter sido executado.",
            "c) Os árbitros devem observar se a equipa está a tentar aumentar o “tempo” ou ganhar uma vantagem de espaço durante a fase de construção.",
            "d) Os árbitros devem estar atentos ao jogo passivo, desde logo que uma equipa ganhe aposse de bola na sua própria metade do campo.",
            "e) A uma equipa, que tentou fazer um contra-ataque, deve ser permitida uma substituição normal, ao mudar do contra-ataque para uma fase normal de construção."
        ],
        "correta": [
            1,
            2,
            3,
            4
        ],
        "regra": 7
    },
    {
        "pergunta": "7.29) A equipa BRANCA está na posse da bola. Os árbitros mostram o sinal de advertência de jogo passivo. Depois de 1 passe, o jogador nº. 5 da equipa BRANCA faz um remate à baliza. O remate é bloqueado pelo jogador nº. 2 da equipa PRETA e a bola volta para o jogador nº. 5 da equipa BRANCA, que passa a bola para o jogador nº. 9 da equipa BRANCA. Quantos passes estão completos?",
        "opcoes": [
            "a) 3",
            "b) 4",
            "c) 5"
        ],
        "correta": 0,
        "regra": 7
    },
    {
        "pergunta": "7.30) A equipa BRANCA está na posse da bola. Os árbitros mostram o sinal de advertência de jogo passivo. O jogador nº. 9 da equipa BRANCA, tenta passar a bola para o jogador nº. 2 da equipa BRANCA, mas o passe é bloqueado pelo jogador nº. 8 da equipa PRETA, e a bola volta para o jogador nº. 9 da equipa BRANCA. O jogador nº. 9 da equipa BRANCA, tenta fazer um avanço na defesa, e é recompensado com um lançamento livre. O jogador nº. 8 da equipa BRANCA, executa o lançamento livre, passando a bola ao jogador nº. 2 da equipa BRANCA. Quantos passes estão completos?",
        "opcoes": [
            "a) 1",
            "b) 2",
            "c) 3"
        ],
        "correta": 1,
        "regra": 7
    },
    {
        "pergunta": "7.31) A equipa BRANCA está na posse da bola. Os árbitros reconhecem uma tendência passiva no jogo da equipa BRANCA. Os árbitros mostram o sinal de advertência de jogo passivo. A equipa PRETA vê, que o sinal de jogo passivo é mostrado, e tornam-se mais agressivos na defesa, tentando provocar um lançamento livre. Após 3 passes da equipa BRANCA, a equipa PRETA provoca um lançamento livre. Qual a decisão correta?",
        "opcoes": [
            "a) A equipa BRANCA tem 4 passes para fazer um remate à baliza.",
            "b) A equipa BRANCA tem 2 passes para fazer um remate à baliza.",
            "c) A equipa BRANCA tem 1 passe para fazer um remate à baliza.",
            "d) A equipa BRANCA tem que executar o lançamento livre como um remate direto à baliza."
        ],
        "correta": 2,
        "regra": 7
    },
    {
        "pergunta": "7.32) A equipa BRANCA está no ataque. Os árbitros reconhecem uma tendência passiva no jogo da equipa BRANCA e fazem o sinal de advertência de jogo passivo. A equipa BRANCA passa a bola 4 vezes antes do jogador nº. 9 da equipa BRANCA fazer um remate à baliza. O remate é bloqueado pelo jogador nº. 3 da equipa PRETA e a bola sai pela linha lateral para reposição de bola em jogo por parte da equipa BRANCA. Qual a decisão correta?",
        "opcoes": [
            "a) O sinal de jogo passivo deixa de ser válido.",
            "b) A equipa BRANCA tem 4 passes para fazer um remate à baliza.",
            "c) A equipa BRANCA tem 2 passes para fazer um remate à baliza.",
            "d) A equipa BRANCA tem 1 passe para fazer um remate à baliza."
        ],
        "correta": 3,
        "regra": 7
    },
    {
        "pergunta": "7.33) A equipa BRANCA está na posse da bola, e por causa de uma tendência passiva no jogo da equipa BRANCA, os árbitros mostram o sinal de jogo passivo. Após 4 passes, o jogador nº. 5 da equipa BRANCA faz um remate à baliza. O Jogador nº. 3 da equipa PRETA, bloqueia o remate, e a bola retorna ao jogador nº. 5 da equipa BRANCA. Qual a decisão correta?",
        "opcoes": [
            "a) Lançamento livre para a equipa PRETA.",
            "b) A equipa BRANCA tem 1 passe para fazer um remate à baliza.",
            "c) O sinal de jogo passivo continua.",
            "d) O sinal de jogo passivo deixa de ser válido.",
            "e) A equipa BRANCA não tem mais passes antes de fazer um remate à baliza."
        ],
        "correta": [
            1,
            2
        ],
        "regra": 7
    },
    {
        "pergunta": "7.34) A equipa PRETA está no ataque. Os árbitros mostram o sinal de advertência de jogo passivo. O jogador nº. 7 da equipa PRETA passa a bola para o jogador nº. 11 da equipa PRETA. O jogador nº. 11 da equipa PRETA tenta romper a defesa, mas é parado pelo jogador nº. 3 da equipa BRANCA.  Os árbitros assinalam um lançamento livre para a equipa PRETA. O jogador nº. 11 da equipa PRETA executa o lançamento livre e passa a bola para o jogador nº. 2 da equipa PRETA, que tenta rematar à baliza, mas o remate é bloqueado pelo jogador nº. 4 da equipa BRANCA, e a bola vai para o jogador nº. 11 da equipa PRETA.  O jogador nº. 11 da equipa PRETA remata à baliza, mas é empurrado levemente pelo jogador nº. 5 da equipa BRANCA e o guarda-redes nº. 1 da equipa BRANCA consegue defender o remate. Qual é a decisão correta?",
        "opcoes": [
            "a) Lançamento livre para a equipa PRETA; novo ataque, porque a equipa PRETA consegue ficar com a posse da bola depois de um remate à baliza.",
            "b) Lançamento livre para a equipa PRETA; sinal de advertência de jogo passivo, a equipa PRETA usou dois passes.",
            "c) Lançamento livre para a equipa PRETA; sinal de advertência de jogo passivo, a equipa PRETA usou três passes.",
            "d) Lançamento livre para a equipa PRETA; sinal de advertência de jogo passivo, a equipa PRETA usou quatro passes."
        ],
        "correta": 2,
        "regra": 7
    },
    {
        "pergunta": "7.35) Com apenas 20 segundos para o fim do jogo, o resultado está em 27-27. A equipa BRANCA está a jogar sem guarda-redes. O sinal de jogo passivo é mostrado pelos árbitros. Após 3 passes, o jogador nº. 8 da equipa BRANCA passa a bola ao jogador n.º 7 da sua equipa, o qual remata à baliza. O remate é bloqueado pelo jogador defensor nº.  2 da equipa PRETA, e a bola sai pela linha lateral. Logo após a execução da reposição de bola em jogo, soa o apito da mesa devido à equipa BRANCA ter solicitado um time-out de equipa. Como se deve reiniciar o jogo?",
        "opcoes": [
            "a) Lançamento livre para a equipa BRANCA.",
            "b) Reposição em jogo para a equipa BRANCA.",
            "c) O lançamento deve ser executado com um remate direto à baliza.",
            "d) Além da possibilidade de o lançamento poder ser executado com um remate direto à baliza, o executante pode ainda passar a bola para um colega da sua equipa."
        ],
        "correta": [
            0,
            3
        ],
        "regra": 7
    },
    {
        "pergunta": "7.36) A equipa BRANCA está no ataque. Dois passes depois de o sinal de aviso de jogo passivo ter sido mostrado pelos árbitros, o jogador nº. 7 da equipa BRANCA remata à baliza. O remate é bloqueado pelo jogador nº. 8 da equipa PRETA. O jogar nº. 8 da equipa BRANCA recebe o ressalto do bloco e tenta rematar à baliza. Novamente, abola é bloqueada pelo jogador nº. 8 da equipa PRETA. BRANCO 8 recebe a bola após o bloco e passa a bola para BRANCO 6, o qual tem uma clara oportunidade de golo. BRANCO 6 é puxado para baixo e por trás por PRETO 7, isto de forma que ele perde totalmente o controlo do corpo. Qual a decisão correta?",
        "opcoes": [
            "a) Livre de 7 metros para a equipa BRANCA.",
            "b) Lançamento livre para a equipa PRETA.",
            "c) Exclusão direta de 2 minutos para PRETO 7.",
            "d) Desqualificação para PRETO 7 (cartão vermelho mostrado pelos árbitros).",
            "e) Lançamento livre para a equipa BRANCA.",
            "f) Time-out."
        ],
        "correta": [
            1,
            3,
            5
        ],
        "regra": 7
    },
    {
        "pergunta": "8.1) Durante um contra-ataque da equipa BRANCA, o jogador nº. 7 da equipa PRETA entra no campo como um jogador adicional e agarra o jogador nº. 5 da equipa BRANCA de tal forma, que a clara hipótese de marcar é destruída. Qual a decisão correta?",
        "opcoes": [
            "a) Exclusão de 2 minutos para o jogador nº. 7 da equipa PRETA.",
            "b) Desqualificação do jogador nº. 7 da equipa PRETA sem um relatório escrito (cartão vermelho mostrado pelos árbitros).",
            "c) Desqualificação do jogador nº. 7 da equipa PRETA com um relatório escrito (cartões vermelho e azul mostrados pelos árbitros).",
            "d) Lançamento livre.",
            "e) Livre de 7 metros."
        ],
        "correta": [
            2,
            4
        ],
        "regra": 8
    },
    {
        "pergunta": "8.2) O jogador nº. 8 da equipa PRETA, que não está incluído no boletim de jogo, chega tarde e corre direto dos balneários para o campo. Ele impede uma clara hipótese de marcar, quando empurra por trás, o jogador nº. 6 da equipa BRANCA, que a saltar, perde o controlo do corpo. Qual a decisão correta?",
        "opcoes": [
            "a) Livre de 7 metros para a equipa BRANCA.",
            "b) Lançamento livre para a equipa BRANCA.",
            "c) Desqualificação do jogador nº. 8 da equipa PRETA sem relatório escrito (cartão vermelho mostrado pelos árbitros.)",
            "d) Desqualificação do jogador nº. 8 da equipa PRETA com relatório escrito (cartões vermelho e azul mostrados pelos árbitros).",
            "e) Sanção progressiva para o «oficial responsável» da equipa PRETA."
        ],
        "correta": [
            0,
            3,
            4
        ],
        "regra": 8
    },
    {
        "pergunta": "8.3) No caminho para os balneários (durante o intervalo) o oficial B da equipa BRANCA reclama de forma antidesportiva com os árbitros. O oficial A da equipa BRANCA já recebeu uma advertência durante a primeira parte do jogo. Qual a decisão correta?",
        "opcoes": [
            "a) Exclusão de 2 minutos para o oficial B da equipa BRANCA.",
            "b) Desqualificação da oficial B da equipa BRANCA (cartão vermelho mostrado pelos árbitros)",
            "c) A equipa BRANCA começa a segunda parte reduzida em um jogador por 2 minutos.",
            "d) Nenhuma sanção possível, mas elaboração de relatório escrito."
        ],
        "correta": [
            0,
            2
        ],
        "regra": 8
    },
    {
        "pergunta": "8.4) O jogador nº. 6 da equipa BRANCA, já foi penalizado duas vezes com uma exclusão de 2 minutos. Agora, o jogador nº. 6 da equipa BRANCA, comete uma substituição irregular. Qual é a decisão, se ele também for culpado de conduta extremamente antidesportiva, depois dos árbitros o informarem sobre a substituição irregular?",
        "opcoes": [
            "a) Exclusão de 2 minutos para o jogador nº. 6 da equipa BRANCA",
            "b) Desqualificação do jogador nº. 6 da equipa BRANCA sem relatório escrito (cartão vermelho mostrado pelos árbitros)",
            "c) Desqualificação do jogador nº. 6 da equipa BRANCA com relatório escrito (cartões vermelho e azul mostrados pelos árbitros)",
            "d) Equipa BRANCA reduzida por um jogador em campo por 2 minutos",
            "e) Equipa BRANCA reduzida por dois jogadores em campo por 2 minutos",
            "f) Equipa BRANCA reduzida por um jogador em campo por 4 minutos"
        ],
        "correta": [
            0,
            2,
            5
        ],
        "regra": 8
    },
    {
        "pergunta": "8.5) O jogador nº. 2 da equipa BRANCA, está suspenso por 2 minutos, mas o oficial A envia-o de volta para o campo depois de passado um minuto. Antes do apito do cronometrista, o jogador nº. 2 da equipa BRANCA, já impediu uma clara hipótese de marcar para a equipa PRETA. Qual a decisão correta?",
        "opcoes": [
            "a) Lançamento livre para a equipa PRETA e uma exclusão adicional para o jogador nº. 2 da equipa BRANCA.",
            "b) Livre de 7 metros para a equipa PRETA, uma exclusão adicional para o jogador nº. 2 da equipa BRANCA e uma redução adicional da equipa BRANCA para o restante do tempo de exclusão do jogador nº. 2 da equipa BRANCA.",
            "c) Livre de 7 metros, desqualificação sem relatório escrito do jogador nº. 2 da equipa BRANCA e uma redução adicional da equipa BRANCA para o restante tempo de exclusão do jogador nº. 2 da equipa BRANCA (cartão vermelho mostrado pelos árbitros).",
            "d) Livre de 7 metros, desqualificação do jogador nº. 2 da equipa BRANCA e uma nova redução da equipa BRANCA para o restante do tempo de exclusão do jogador nº. 2 da equipa BRANCA; relatório escrito (cartões vermelho e azul mostrados pelos árbitros)."
        ],
        "correta": 3,
        "regra": 8
    },
    {
        "pergunta": "8.6) Durante o ataque da equipa BRANCA, o jogador nº. 7 da equipa BRANCA, que não está na posse da bola, bloqueia o jogador nº. 4 da equipa PRETA com o seu tronco. Qual a decisão correta?",
        "opcoes": [
            "a) Lançamento livre para a equipa PRETA",
            "b) Sanção progressiva para o jogador nº. 7 da equipa BRANCA",
            "c) O jogo continua sem interrupção"
        ],
        "correta": 2,
        "regra": 8
    },
    {
        "pergunta": "8.7) O jogador nº. 4 da equipa BRANCA tem uma clara hipótese de marcar. O jogador nº. 7 da equipa PRETA, tenta tirar-lhe a bola da mão, mas atinge-lhe o antebraço. A bola rola e sai pela linha de saída de baliza. Qual a decisão correta?",
        "opcoes": [
            "a) Lançamento livre para a equipa BRANCA.",
            "b) Livre de 7 metros para a equipa BRANCA.",
            "c) Exclusão de 2 minutos para o jogador nº. 7 da equipa PRETA.",
            "d) Advertência para o jogador nº. 7 da equipa PRETA.",
            "e) Nenhuma sanção progressiva para o jogador nº. 7 da equipa PRETA."
        ],
        "correta": [
            1,
            4
        ],
        "regra": 8
    },
    {
        "pergunta": "8.8) O jogador nº. 6 da equipa BRANCA está num contra-ataque; o guarda-redes nº. 12 da equipa PRETA deixa a sua área de baliza para ganhar a posse da bola, mas colide com o jogador nº. 6 da equipa BRANCA. Contudo, um defesa poderia ter travado o jogador nº. 6 da equipa BRANCA usando meios legais. Qual a decisão correta?",
        "opcoes": [
            "a) Exclusão de 2 minutos para o jogador nº. 12 da equipa PRETA.",
            "b) Desqualificação para o jogador nº. 12 da equipa PRETA (cartão vermelho mostrado pelos árbitros).",
            "c) Livre de 7 metros para a equipa BRANCA.",
            "d) Lançamento livre para a equipa BRANCA.",
            "e) Desqualificação do guarda-redes nº. 12 da equipa PRETA, relatório escrito (cartões vermelho e azul mostrados pelos árbitros)."
        ],
        "correta": [
            1,
            2
        ],
        "regra": 8
    },
    {
        "pergunta": "8.9) O jogador nº. 2 da equipa BRANCA quer passar a bola para um companheiro de equipa que está, do outro lado do campo, mas o seu companheiro de equipa é agarrado pelo jogador nº. 5 da equipa PRETA. O jogador nº. 5 da equipa PRETA, já recebeu uma advertência por correr contra um adversário, que não tinha a bola. Qual a decisão correta?",
        "opcoes": [
            "a) Lançamento livre para a equipa BRANCA",
            "b) Exclusão de 2 minutos para o jogador nº. 5 da equipa PRETA",
            "c) Desqualificação para o jogador nº. 5 da equipa PRETA (cartão vermelho mostrado pelos árbitros).",
            "d) Relatório escrito (cartões vermelho e azul mostrados pelos árbitros)."
        ],
        "correta": [
            0,
            1
        ],
        "regra": 8
    },
    {
        "pergunta": "8.10) A bola é passada para o jogador pivot nº. 9 da equipa BRANCA, que está sozinho na linha de área de baliza da equipa PRETA. O seu braço de remate é então puxado para trás pelo jogador nº. 2 da equipa PRETA. Qual a decisão correta?",
        "opcoes": [
            "a) Lançamento livre para a equipa BRANCA.",
            "b) Livre de 7 metrospara a equipa BRANCA.",
            "c) Exclusão de 2 minutos para o jogador nº. 2 da equipa PRETA.",
            "d) Desqualificação para o jogador nº. 2 da equipa PRETA (cartão vermelho mostrado pelos árbitros)."
        ],
        "correta": [
            1,
            3
        ],
        "regra": 8
    },
    {
        "pergunta": "8.11) Pouco depois do jogador nº. 9 da equipa PRETA receber uma advertência por empurrar um jogador no primeiro minuto do jogo, o jogador nº. 7 da equipa PRETA, agarra o pivot da equipa BRANCA. (não há clara hipótese de marcar). Qual a decisão correta?",
        "opcoes": [
            "a) Lançamento livre para a equipa BRANCA",
            "b) Livre de 7 metros para a equipa BRANCA",
            "c) Advertência para o jogador nº. 7 da equipa PRETA",
            "d) Exclusão de 2 minutos para o jogador nº. 7 da equipa PRETA"
        ],
        "correta": [
            0,
            2
        ],
        "regra": 8
    },
    {
        "pergunta": "8.12) O jogador nº. 4 da equipa BRANCA, recebe a bola de pé na linha da área de baliza do adversário, com apenas o guarda-redes na sua frente. Antes do jogador nº. 4 da equipa BRANCA tentar rematar, o jogador nº. 3 da equipa PRETA puxa-o para o baixo, de uma forma que o jogador nº. 4 da equipa BRANCA perde a bola. Qual a decisão correta?",
        "opcoes": [
            "a) Advertência para o jogador nº. 3 da equipa PRETA.",
            "b) Exclusão de 2 minutos para o jogador nº. 3 da equipa PRETA.",
            "c) Desqualificação para o jogador nº. 3 da equipa PRETA (cartão vermelho mostrado pelos árbitros).",
            "d) Lançamento livre para a equipa BRANCA.",
            "e) Livre de 7 metros para a equipa BRANCA."
        ],
        "correta": [
            1,
            4
        ],
        "regra": 8
    },
    {
        "pergunta": "8.13) Quando deve um jogador ser desqualificado (cartão vermelho ou cartão vermelho e cartão azul mostrado pelos árbitros)?",
        "opcoes": [
            "a) Por uma falta que coloca em perigo a integridade física de um adversário",
            "b) Por conduta antidesportiva extremamente grave, dentro ou fora do terreno de jogo",
            "c) Por conduta antidesportiva repetida no terreno de jogo",
            "d) Por uma substituição irregular durante uma exclusão (sem clara hipótese de marcar)"
        ],
        "correta": [
            0,
            1
        ],
        "regra": 8
    },
    {
        "pergunta": "8.14) Durante um contra-ataque por parte do jogador nº. 5 da equipa BRANCA, o oficial C da equipa PRETA, corre do banco para o campo em direção à sua própria área de baliza. O jogador nº. 5 da equipa BRANCA fica tão confuso, que para de correr. Na opinião do árbitro, o jogador nº. 5 da equipa BRANCA, tinha uma clara hipótese de marcar. O oficial culpado não tocou no adversário que tinha a bola; a sua distância mais curta para o jogador nº. 5 da equipa BRANCA foi de aproximadamente 10 metros. Qual a decisão correta?",
        "opcoes": [
            "a) Time-out.",
            "b) Lançamento livre para a equipa BRANCA.",
            "c) Livre de 7 metros para a equipa BRANCA.",
            "d) Desqualificação sem relatório escrito do oficial C da equipa PRETA (cartão vermelho mostrado pelos árbitros).",
            "e) Desqualificação do oficial C da equipa PRETA, relatório escrito (cartões vermelho e azul mostrados pelos árbitros).",
            "f) Equipa PRETA reduzida em um jogador em campo por 2 minutos."
        ],
        "correta": [
            0,
            2,
            4,
            5
        ],
        "regra": 8
    },
    {
        "pergunta": "8.15) A equipa BRANCA está num contra-ataque. O jogador nº. 5 da equipa BRANCA quer passar a bola para o jogador nº. 7 da equipa BRANCA, que está sozinho na linha da área de baliza da equipa PRETA. Quando o jogador nº. 5 da equipa BRANCA passa a bola, o oficial D da equipa PRETA corre para o campo e agarra a bola. Qual a decisão correta?",
        "opcoes": [
            "a) Lançamento livre para a equipa BRANCA.",
            "b) Livre de 7 metros para a equipa BRANCA.",
            "c) Exclusão de 2 minutos para o oficial D da equipa PRETA",
            "d) Desqualificação sem relatório escrito do oficial D da equipa PRETA (cartão vermelho mostrado pelos árbitros).",
            "e) Desqualificação do oficial D da equipa PRETA, relatório escrito (cartões vermelhos e azul mostrados pelos árbitros).",
            "f) Equipa PRETA reduzida por um jogador em campo por 2 minutos."
        ],
        "correta": [
            1,
            4,
            5
        ],
        "regra": 8
    },
    {
        "pergunta": "8.16) Qual das seguintes ações deve ser definida como conduta antidesportiva extremamente grave e, portanto, ser punida com uma desqualificação com um relatório escrito (cartões vermelho e azul mostrados pelos árbitros)?",
        "opcoes": [
            "a) Um jogador de campo, repetidamente, defender com o pé ou perna.",
            "b) Um oficial da equipa destruir uma clara hipótese de marcar.",
            "c) Cuspir noutra pessoa.",
            "d) Repetidos atrasos no jogo, com o propósito de perder tempo."
        ],
        "correta": [
            1,
            2
        ],
        "regra": 8
    },
    {
        "pergunta": "8.17) Ao entrar no campo de jogo, os árbitros encontram o jogador nº. 4 da equipa PRETA, que está a usar o equipamento de jogador, mas não está incluído no boletim de jogo. O jogador nº. 4 da equipa PRETA, grita: “não estes idiotas de novo!”. Após 12 minutos de jogo, o jogador nº. 4 da equipa PRETA é adicionado ao boletim de jogo como 14º jogador. Isto é descoberto pelos árbitros. Qual a decisão correta?",
        "opcoes": [
            "a) Desqualificação sem relatório escrito do jogador nº. 4 da equipa PRETA (cartão vermelho mostrado pelos árbitros).",
            "b) A equipa PRETA é reduzida por um jogador em campo por 2 minutos.",
            "c) A equipa PRETA continua sem uma redução de jogadores no campo.",
            "d) Desqualificação do jogador nº. 4 da equipa PRETA, relatório escrito (cartões vermelho e azul mostrados pelos árbitros).",
            "e) A equipa PRETA pode adicionar um outro jogador para completar o número permitido da equipa de 14 jogadores."
        ],
        "correta": [
            2,
            3
        ],
        "regra": 8
    },
    {
        "pergunta": "8.18) Depois de um lançamento livre para a equipa BRANCA, o oficial C da equipa PRETA entra no campo e grita: «mas isto deve ser um lançamento livre para nós!». Nenhum oficial da equipa PRETA foi punido anteriormente no jogo. Qual a decisão correta?",
        "opcoes": [
            "a) O oficial responsável da equipa PRETA deve colocar o oficial C da equipa fora do campo.",
            "b) Exclusão de 2 minutos para o oficial C da equipa PRETA, a equipa PRETA é reduzida por um jogador em campo por 2 minutos.",
            "c) Advertência para o oficial C da equipa PRETA.",
            "d) Lançamento livre para a equipa BRANCA."
        ],
        "correta": [
            2,
            3
        ],
        "regra": 8
    },
    {
        "pergunta": "8.19) O jogador nº. 3 da equipa BRANCA, recebe uma advertência devido a uma falta em campo, que requer uma sanção progressiva. Após o reinício do jogo e após ser substituído, o jogador nº. 3 da equipa BRANCA, a partir do banco de suplentes, insulta os árbitros. Qual a decisão correta?",
        "opcoes": [
            "a) Desqualificação sem relatório escrito do jogador nº. 3 da equipa BRANCA (cartão vermelho mostrado pelos árbitros, e equipa BRANCA reduzida por um jogador no campo por 2 minutos.",
            "b) Desqualificação do jogador nº. 3 da equipa BRANCA, relatório escrito (cartões vermelho e azul mostrados pelos árbitros). Equipa BRANCA reduzida por um jogador em campo por 2 minutos.",
            "c) Exclusão de 2 minutos para o jogador nº. 3 da equipa BRANCA, e equipa BRANCA reduzida por um jogador em campo por 2 minutos.",
            "d) Time-out"
        ],
        "correta": [
            1,
            3
        ],
        "regra": 8
    },
    {
        "pergunta": "8.20) Durante um contra-ataque, o jogador nº. 9 da equipa PRETA vê a sua camisola puxada pelo jogador nº. 4 da equipa BRANCA, que já recebeu uma advertência. Apesar disso, o jogador nº. 9 da equipa PRETA, consegue passar a bola para o jogador nº. 8 da equipa PRETA, que marca um golo. Os árbitros querem penalizar o jogador nº. 4 da equipa BRANCA depois, mas este já está sentado no banco de suplentes. Qual a decisão correta?",
        "opcoes": [
            "a) Exclusão de 2 minutos para o jogador nº. 4 da equipa BRANCA; A equipa BRANCA é reduzida em um jogador em campo por 2 minutos.",
            "b) Ao jogador nº. 4 da equipa BRANCA não é permitido jogar nos próximos 2 minutos, mas a equipa permanece completa no campo.",
            "c) Já não é possível aplicar a sanção.",
            "d) Desqualificação para o jogador nº. 4 da equipa BRANCA (cartão vermelho mostrado pelos árbitros), e equipa BRANCA é reduzida em um jogador no campo por 2 minutos."
        ],
        "correta": 0,
        "regra": 8
    },
    {
        "pergunta": "8.21) Quando deve um jogador ser desqualificado (cartão vermelho ou cartão vermelho e cartão azul mostrado pelos árbitros)?",
        "opcoes": [
            "a) Por conduta seriamente antidesportiva.",
            "b) Por impedir uma clara hipótese de marcar, bloqueando ativamente um remate ou passe, usando o pé.",
            "c) Por substituição irregular durante o tempo de exclusão (sem possibilidade clara de marcar).",
            "d) Por não colocar a bola no chão, num lançamento livre contra sua equipa (situação fora dos últimos 30 segundos)."
        ],
        "correta": 0,
        "regra": 8
    },
    {
        "pergunta": "8.22) A equipa PRETA está no ataque. O jogador nº. 11 da equipa BRANCA tira a bola do jogador nº. 6 da equipa PRETA, cometendo uma falta, que coloca em perigo a integridade física do jogador nº. 6 da equipa PRETA. O jogador nº. 7 da equipa BRANCA e o jogador nº. 8 da equipa BRANCA, posicionavam-se entre o jogador nº. 6 da equipa PRETA e a baliza da equipa BRANCA no momento da falta. Qual a decisão correta?",
        "opcoes": [
            "a) Exclusão de 2 minutos para o jogador nº. 11 da equipa BRANCA.",
            "b) Desqualificação para o jogador nº. 11 da equipa BRANCA (cartão vermelho mostrado pelos árbitros).",
            "c) Livre de 7 metros para a equipa PRETA.",
            "d) Lançamento livre para a equipa PRETA."
        ],
        "correta": [
            1,
            3
        ],
        "regra": 8
    },
    {
        "pergunta": "8.23) Qual das infrações a seguir, deve ser punida com uma desqualificação com relatório escrito de acordo com as regras (cartões vermelho e azul mostrados pelos árbitros)?",
        "opcoes": [
            "a) Um oficial entrar no campo pela segunda vez sem permissão.",
            "b) Um oficial, que tenta forçar a sua equipa a abandonar o jogo.",
            "c) Quando num livre de 7 metros, atinge a cabeça do guarda-redes, e o guarda redes não move a cabeça na direção da bola.",
            "d) Após uma decisão dos árbitros, um jogador jogar a bola para as bancadas.",
            "e) Um jogador fora do campo de jogo, cospe num espectador."
        ],
        "correta": [
            1,
            4
        ],
        "regra": 8
    },
    {
        "pergunta": "8.24) O jogador nº. 3 da equipa BRANCA recebeu uma exclusão de 2 minutos por ter cometido uma falta e está a sentar-se no banco de suplentes. Durante um lançamento de reposição de bola em jogo perto do banco, o jogador nº. 3 da equipa BRANCA grita para os árbitros para insultá-los. Qual a decisão correta?",
        "opcoes": [
            "a) Exclusão de 2 minutos para o jogador nº. 3 da equipa BRANCA",
            "b) Desqualificação sem relatório escrito para o jogador nº. 3 da equipa BRANCA (cartão vermelho mostrado pelos árbitros), que provoca uma redução imediata de 2 minutos da equipa BRANCA no campo.",
            "c) A equipa BRANCA reduzida por um jogador em campo por 4 minutos.",
            "d) Desqualificação para o jogador nº. 3 da equipa BRANCA, relatório escrito (cartões vermelho e azul mostrados pelos árbitros), o que provoca uma redução imediata deum jogador da equipa BRANCA em campo por 2 minutos."
        ],
        "correta": 3,
        "regra": 8
    },
    {
        "pergunta": "8.25) Devido a descontentamento por um erro no jogo, o jogador nº. 3 da equipa BRANCA atinge um dos seus companheiros na cara. Qual a decisão correta?",
        "opcoes": [
            "a) Nenhuma ação, porque envolve um companheiro de equipa",
            "b) Exclusão de 2 minutos para o jogador nº. 3 da equipa BRANCA",
            "c) Desqualificação sem relatório escrito para o jogador nº. 3 da equipa BRANCA (cartão vermelho mostrado pelos árbitros).",
            "d) Desqualificação para o jogador nº. 3 da equipa BRANCA, relatório escrito (cartões vermelho e azul mostrados pelos árbitros)."
        ],
        "correta": 3,
        "regra": 8
    },
    {
        "pergunta": "8.26) Ao entrarem no campo, os árbitros encontram o jogador nº. 4 da equipa PRETA, que já está equipado como jogador e este imediatamente grita: «estes idiotas de novo não!» Os árbitros verificam que o jogador nº. 4 da equipa PRETA está incluído no boletim de jogo. Qual a decisão correta?",
        "opcoes": [
            "a) Exclusão de 2 minutos para jogador nº. 4 da equipa PRETA no início do jogo.",
            "b) Desqualificação sem relatório escrito do jogador nº. 4 da equipa PRETA (cartão vermelho mostrado pelos árbitros), a equipa PRETA é reduzida por um jogador em campo por 2 minutos no início do jogo.",
            "c) Desqualificação do jogador nº. 4 da equipa PRETA, relatório escrito (cartões vermelho e azul mostrados pelos árbitros), a equipa PRETA pode usar 14 jogadores no jogo.",
            "d) Desqualificação do jogador nº. 4 da equipa PRETA, relatório escrito (cartões vermelho e azul mostrados pelos árbitros), a equipa PRETA pode usar 14 jogadores no jogo, mas é reduzida por um jogador no campo por 2 minutos no início do jogo."
        ],
        "correta": 2,
        "regra": 8
    },
    {
        "pergunta": "8.27) Durante o aquecimento antes do jogo, o jogador nº. 3 da equipa BRANCA e o guarda-redes nº. 1 da equipa PRETA, colidem por acidente. Os dois jogadores ficam chateados um com o outro, e o guarda-redes nº. 1 da equipa PRETA, atinge o jogador nº. 3 da equipa BRANCA. O jogador nº. 3 da equipa BRANCA, acerta-lhe em seguida. Ambos os jogadores estão incluídos no boletim de jogo para o jogo. Qual a decisão correta?",
        "opcoes": [
            "a) Desqualificação do guarda-redes nº. 1 da equipa PRETA, relatório escrito (cartões vermelho e azul mostrados pelos árbitros) e uma exclusão de 2 minutos para o jogador nº.3 da equipa BRANCA. As equipas podem usar 14 jogadores no jogo.",
            "b) Desqualificação do guarda-redes nº. 1 da equipa PRETA e do jogador nº. 3 da equipa BRANCA, relatório escrito (cartões vermelhos e azuis mostrados pelos árbitros). As equipas podem usar 14 jogadores no jogo, mas ambas as equipas são reduzidas por um jogador no campo por 2 minutos no início do jogo.",
            "c) Ambos os jogadores recebem uma exclusão de 2 minutos, que deve ser aplicada no início do jogo. Relatório escrito.",
            "d) Desqualificação do guarda-redes nº. 1 da equipa PRETA e do jogador nº. 3 da equipa BRANCA, relatório escrito (cartões vermelhos e azuis mostrados pelos árbitros). As equipas podem usar 14 jogadores no jogo."
        ],
        "correta": 3,
        "regra": 8
    },
    {
        "pergunta": "8.28) O jogador nº. 9 da equipa BRANCA, está a rematar em salto. O jogador nº. 5 da equipa PRETA, agarra o braço de remate do jogador nº. 9 da equipa BRANCA por trás e puxa-o para baixo. O jogador nº. 10 da equipa PRETA e o jogador nº. 11 da equipa PRETA, estão na posição entre o jogador nº. 9 da equipa BRANCA e a baliza da equipa PRETA. Qual a decisão correta?",
        "opcoes": [
            "a) Lançamento livre para a equipa BRANCA.",
            "b) Livre de 7 metros para a equipa BRANCA.",
            "c) Desqualificação sem relatório escrito do jogador nº. 5 da equipa PRETA (cartão vermelho mostrado pelos árbitros).",
            "d) Exclusão de 2 minutos para o jogador nº. 5 da equipa PRETA.",
            "e) Desqualificação do jogador nº. 5 da equipa PRETA, relatório escrito (cartões vermelho e azul mostrados pelos árbitros)."
        ],
        "correta": [
            0,
            2
        ],
        "regra": 8
    },
    {
        "pergunta": "8.29) Qual das seguintes infrações deve ser punida com uma desqualificação (cartão vermelho mostrado pelos árbitros)?",
        "opcoes": [
            "a) Um oficial entrar no campo pela segunda vez sem permissão.",
            "b) Um jogador na posse da bola, é puxado para baixo quando está a correr durante um contra-ataque. A situação não é particularmente perigosa.",
            "c) Livre de 7 metros bate na cara do guarda-redes, que não se está a mover na direção da bola.",
            "d) Depois de uma decisão do árbitro, um jogador jogar a bola para as bancadas em forma de protesto.",
            "e) O guarda-redes deixar a área de baliza e ganhar posse da bola, mas provocar uma colisão com um adversário, que está a correr num contra-ataque."
        ],
        "correta": [
            1,
            2,
            3,
            4
        ],
        "regra": 8
    },
    {
        "pergunta": "8.30) O jogador nº. 9 da equipa BRANCA, recebe uma desqualificação após a sua terceira exclusão de 2 minutos. Vestindo o seu fato de treino, toma um lugar na primeira fila de espetadores, atrás da linha lateral oposta às áreas de substituição. Diretamente na frente dele, o jogador nº. 3 da equipa PRETA, comete uma falta particularmente perigosa contra o jogador nº. 10 da equipa BRANCA. O jogador permanece lesionado no chão. Antes que os árbitros possam punir o jogador nº. 3 da equipa PRETA, o jogador nº. 9 da equipa BRANCA, corre para o campo e bate no jogador nº. 3 da equipa PRETA. Qual a decisão correta?",
        "opcoes": [
            "a) Time-out",
            "b) Desqualificação do jogador nº. 3 da equipa PRETA, relatório escrito (cartões vermelho e azul mostrados pelos árbitros.)",
            "c) O jogador nº. 9 da equipa BRANCA já não está envolvido no jogo, sem comentários possíveis.",
            "d) Relatório escrito sobre o comportamento do jogador nº. 9 da equipa BRANCA.",
            "e) Desqualificação sem relatório escrito do jogador nº. 3 da equipa PRETA (cartão vermelho mostrado pelos árbitros).",
            "f) O jogador nº. 10 da equipa BRANCA, deve deixar o campo após receber cuidados médicos e só pode reentrar após o terceiro ataque da sua equipa."
        ],
        "correta": [
            0,
            1,
            3
        ],
        "regra": 8
    },
    {
        "pergunta": "8.31) Deve ser dada uma advertência a:",
        "opcoes": [
            "a) Infrações em que a ação é principalmente ou exclusivamente dirigida ao corpo do adversário.",
            "b) Infrações quando os adversários estão a executar um lançamento.",
            "c) Falha ao colocar a bola no chão, quando uma decisão é tomada contra a própria equipa.",
            "d) A tentativa de um guarda-redes para fazer uma substituição, quando um adversário está pronto para executar um livre de 7 metros."
        ],
        "correta": [
            0,
            1,
            3
        ],
        "regra": 8
    },
    {
        "pergunta": "8.32) O que deve ser considerado como conduta antidesportiva?",
        "opcoes": [
            "a) Jogar a bola à cara de um defesa, que não se está a mover na direção da bola.",
            "b) Comportamento passivo do guarda-redes durante a execução de um lançamento de 7 metros, se for evidente, que ele não está disposto a defender o remate.",
            "c) Tentar enganar os árbitros através de ações falsas.",
            "d) Ativamente bloqueando um remate usando um pé ou perna.",
            "e) Repetidamente entrar na área de baliza por razões táticas.",
            "f) Um ato de vingança depois de ter sofrido falta."
        ],
        "correta": [
            2,
            3,
            4
        ],
        "regra": 8
    },
    {
        "pergunta": "8.33) Em que situações uma desqualificação deve levar a um relatório escrito (cartões vermelho e azul mostrados pelos árbitros)?",
        "opcoes": [
            "a) Agressão no terreno de jogo durante o intervalo.",
            "b) Uma ação particularmente imprudente ou perigosa.",
            "c) Um ato de vingança depois de ter sofrido falta.",
            "d) Uma ação maliciosa, que não está de forma alguma relacionada com a situação do jogo."
        ],
        "correta": [
            0,
            1,
            3
        ],
        "regra": 8
    },
    {
        "pergunta": "8.34) Há um lançamento de reposição para a equipa BRANCA. O árbitro apita, e o nº. 9 da equipa BRANCA está pronto para executar o lançamento. O jogador nº. 3 da equipa BRANCA, após o sinal de apito, atravessa a linha central e é puxado para baixo por trás pelo jogador nº. 5 da equipa PRETA, de uma forma que ele perde totalmente o controlo do corpo. Qual a decisão correta?",
        "opcoes": [
            "a) Exclusão de 2 minutos para o jogador nº. 5 da equipa PRETA",
            "b) Desqualificação sem relatório escrito do jogador nº. 5 da equipa PRETA (cartão vermelho mostrado pelos árbitros)",
            "c) Lançamento livre para a equipa BRANCA",
            "d) Livre de 7 metros para a equipa BRANCA",
            "e) Lançamento de saída para a equipa BRANCA",
            "f) Desqualificação do jogador nº. 5 da equipa PRETA, relatório escrito (cartões vermelho e azul mostrados pelos árbitros)."
        ],
        "correta": [
            1,
            2
        ],
        "regra": 8
    },
    {
        "pergunta": "8.35) O jogador nº. 8 da equipa PRETA recebeu uma exclusão de 2 minutos devido a uma substituição irregular. Dois segundos depois do jogo ser retomado, ele, da sua posição no banco, comenta sobre os árbitros de uma forma antidesportiva. Qual a decisão correta?",
        "opcoes": [
            "a) Uma exclusão adicional de 2 minutos para o jogador nº. 8 da equipa PRETA.",
            "b) Desqualificação sem relatório escrito do jogador nº. 8 da equipa PRETA (cartão vermelho mostrado pelos árbitros).",
            "c) A equipa PRETA será reduzida em dois jogadores em campo nos próximos 1 minuto e 58 segundos e, em seguida, de um jogador em campo por 2 segundos.",
            "d) A equipa PRETA será reduzida em dois jogadores em campo nos próximos 2 minutos.",
            "e) Lançamento livre para a equipa BRANCA.",
            "f) Time-out."
        ],
        "correta": [
            0,
            2,
            4,
            5
        ],
        "regra": 8
    },
    {
        "pergunta": "8.36) O guarda-redes nº. 1 da equipa BRANCA, faz um passe longo para o jogador nº. 15 da equipa BRANCA, que está a correr sozinho para a baliza dos adversários. O guarda-redes nº. 12 da equipa PRETA deixa a sua área de baliza, salta para cima, agarra a bola e colide com o jogador nº. 15 da equipa BRANCA no ar. Ambos os jogadores caem no chão e ficam lá lesionados. Qual a decisão correta?",
        "opcoes": [
            "a) Time-out, exclusão de 2 minutos para o jogador nº. 15 da equipa BRANCA.",
            "b) Time-out, exclusão de 2 minutos para o guarda-redes nº. 12 da equipa PRETA.",
            "c) Time-out, desqualificação para o guarda-redes nº. 12 da equipa PRETA.",
            "d) Lançamento livre para a equipa BRANCA.",
            "e) Lançamento livre para a equipa PRETA.",
            "f) Livre de 7 metros para a equipa BRANCA."
        ],
        "correta": [
            2,
            5
        ],
        "regra": 8
    },
    {
        "pergunta": "8.37) A equipa PRETA está na posse da bola. O delegado interrompe o jogo porque o oficial A da equipa PRETA, jogou uma cadeira para o campo, em protesto, por uma decisão do árbitro. Não houve anteriormente nenhuma sanção dada aos oficiais da equipa PRETA. O jogador nº. 7 da equipa PRETA, tinha uma clara hipótese de marcar, quando o jogo foi interrompido. Qual a decisão correta?",
        "opcoes": [
            "a) Advertência para o oficial A da equipa PRETA.",
            "b) Exclusão de 2 minutos para o oficial A da equipa PRETA.",
            "c) Desqualificação sem relatório escrito do oficial A da equipa PRETA (cartão vermelho mostrado pelos árbitros).",
            "d) Lançamento livre para a equipa BRANCA.",
            "e) Livre de 7 metros para a equipa PRETA.",
            "f) Desqualificação do oficial A da equipa PRETA, relatório escrito (cartões vermelho e azul mostrados pelos árbitros)."
        ],
        "correta": [
            3,
            5
        ],
        "regra": 8
    },
    {
        "pergunta": "8.38) O oficial A da equipa BRANCA protesta ruidosamente devido a uma decisão do árbitro: «Vocês são uns idiotas!». O oficial C da equipa BRANCA já recebeu uma advertência há 10 minutos. Qual a decisão correta?",
        "opcoes": [
            "a) Advertência para oficial A da equipa BRANCA devido a conduta antidesportiva.",
            "b) Exclusão de 2 minutos para o oficial A da equipa BRANCA. A equipa BRANCA é reduzida em um jogador em campo por 2 minutos.",
            "c) Desqualificação do oficial A da equipa BRANCA, relatório escrito (cartões vermelho e azul mostrados pelos árbitros). A Equipa BRANCA é reduzida em um jogador em campo por 2 minutos.",
            "d) Time-out."
        ],
        "correta": [
            2,
            3
        ],
        "regra": 8
    },
    {
        "pergunta": "8.39) O guarda-redes nº. 1 da equipa BRANCA, quer realizar um lançamento de baliza. Pela segunda vez, o jogador nº. 3 da equipa PRETA, entra agora na área da baliza e tenta impedir que o guarda-redes nº. 1 da equipa BRANCA, execute o lançamento, sem contato corporal com ele. Qual a decisão correta?",
        "opcoes": [
            "a) Lançamento livre para a equipa BRANCA",
            "b) Lançamento de baliza para a equipa BRANCA após o sinal de apito",
            "c) Advertência para o jogador nº. 3 da equipa PRETA",
            "d) Exclusão de 2 minutos para jogador nº. 3 da equipa PRETA",
            "e) Time-out"
        ],
        "correta": [
            1,
            3,
            4
        ],
        "regra": 8
    },
    {
        "pergunta": "8.40) O jogador nº. 4 da equipa BRANCA, toca na bola, que está a rolar no chão na área de baliza da equipa PRETA. No momento seguinte, é empurrado para o chão pelo jogador nº. 6 da equipa PRETA. Qual a decisão correta?",
        "opcoes": [
            "a) Sanção progressiva para o jogador nº. 6 da equipa PRETA",
            "b) Lançamento livre para a equipa BRANCA",
            "c) Lançamento de baliza para a equipa PRETA",
            "d) Lançamento livre para a equipa PRETA"
        ],
        "correta": [
            0,
            2
        ],
        "regra": 8
    },
    {
        "pergunta": "8.41) O jogador nº. 7 da equipa BRANCA acaba de receber uma exclusão de 2 minutos por conduta antidesportiva. Esta é a sua primeira exclusão. 10 segundos depois do jogo ser retomado, faz gestos fortes no banco para mostrar que não concorda com os árbitros. Qual a decisão correta?",
        "opcoes": [
            "a) Desqualificação sem relatório escrito do jogador nº. 7 da equipa BRANCA (cartão vermelho mostrado pelos árbitros).",
            "b) Exclusão de 2 minutos para o jogador nº. 7 da equipa BRANCA, o jogador nº. 7 da equipa BRANCA deve permanecer 4 minutos no banco.",
            "c) Uma exclusão adicional de 2 minutos para o jogador nº. 7 da equipa BRANCA, a equipa BRANCA será reduzida por dois jogadores no campo por 1 minuto e 50 segundos e, em seguida, por um jogador em campo por 10 segundos.",
            "d) Advertência porque a sanção progressiva no banco é separada das punições no campo."
        ],
        "correta": 2,
        "regra": 8
    },
    {
        "pergunta": "8.42) O jogador nº. 6 da equipa BRANCA é empurrado pelo jogador nº. 3 da equipa PRETA e «cospe» intencionalmente no chão na frente do jogador nº. 3 da equipa PRETA. Como será punido o jogador nº. 6 da equipa BRANCA?",
        "opcoes": [
            "a) Sanção progressiva",
            "b) Sempre com uma exclusão de 2 minutos",
            "c) Desqualificação sem relatório escrito (cartão vermelho mostrado pelos árbitros)",
            "d) Desqualificação, relatório escrito (cartões vermelho e azul mostrados pelos árbitros)"
        ],
        "correta": 2,
        "regra": 8
    },
    {
        "pergunta": "8.43) O guarda-redes nº. 12 da equipa BRANCA, corre a partir da área de baliza, em direção ao jogador nº. 10 da equipa PRETA, que está num contra-ataque. O guarda-redes nº. 12 da equipa BRANCA, aproxima-se de lado do jogador nº. 10 da equipa PRETA e agarra-se a ele, mas o jogador nº. 10 da equipa PRETA consegue agarrar a bola e rematar para a baliza vazia, obtendo golo. Qual a decisão correta?",
        "opcoes": [
            "a) Lançamento de saída.",
            "b) Time-out.",
            "c) Desqualificação do guarda-redes nº. 12 da equipa BRANCA.",
            "d) Exclusão de 2 minutos para guarda-redes nº. 12 da equipa BRANCA.",
            "e) Livre de 7 metros para a equipa PRETA."
        ],
        "correta": [
            0,
            1,
            3
        ],
        "regra": 8
    },
    {
        "pergunta": "8.44) O guarda-redes nº. 12 da equipa BRANCA, executa um lançamento de baliza, fazendo um passe longo em direção do seu companheiro de equipa, o jogador nº. 4 da equipa BRANCA, que está no contra-ataque. O jogador nº. 4 da equipa BRANCA salta para receber a bola e imediatamente após, colide com o guarda-redes nº. 1 da equipa PRETA, que decidiu deixar a sua área de baliza tentando parar o contra-ataque. Na altura da colisão, o guardaredes nº. 1 da equipa PRETA, está completamente parado na frente da linha de 9 metros. Após a colisão, o jogador nº. 4 da equipa BRANCA, perde o controlo do corpo e cai no chão. Qual a decisão correta?",
        "opcoes": [
            "a) Falta ofensiva - lançamento livre para a equipa PRETA",
            "b) Lançamento livre para a equipa BRANCA",
            "c) Livre de 7 metros para a equipa BRANCA",
            "d) Sanção progressiva para o guarda-redes nº. 1 da equipa PRETA",
            "e) Desqualificação sem relatório escrito do guarda-redes nº. 1 da equipa PRETA (cartão vermelho mostrado pelos árbitros)"
        ],
        "correta": [
            2,
            4
        ],
        "regra": 8
    },
    {
        "pergunta": "8.45) Qual das seguintes infrações, deve ser punida com uma desqualificação com um relatório escrito de acordo com as regras (cartões vermelho e azul mostrados pelos árbitros)?",
        "opcoes": [
            "a) Um jogador cospe num adversário e bate-lhe",
            "b) Um oficial, que tenta forçar a sua equipa a abandonar o jogo",
            "c) Quando num livre de 7 metros, atinge a cabeça do guarda-redes, sem que o guarda-redes mova a cabeça na direção da bola.",
            "d) Depois de uma decisão do árbitro, um jogador jogar a bola de forma intencional para as bancadas.",
            "e) Um jogador fora do campo, cospe num espectador.",
            "f) Um jogador atinge intencionalmente um adversário no estômago"
        ],
        "correta": [
            0,
            1,
            4,
            5
        ],
        "regra": 8
    },
    {
        "pergunta": "8.46) Tempo de jogo 59:26. O jogador nº. 10 da equipa PRETA, sai a correr isolado num contra-ataque. Quando recebe a bola de um companheiro de equipa, o jogador nº. 10 da equipa PRETA, colide com o guarda-redes nº. 1 da equipa BRANCA, que deixou a área de baliza, mas antes de cair, é capaz de passar a bola para o jogador nº. 7 da equipa PRETA, que remata à baliza vazia, mas a bola sai pela linha de saída de baliza. Quando os árbitros pedem timeout, o tempo de jogo é 59:31. Qual a decisão correta?",
        "opcoes": [
            "a) Lançamento livre",
            "b) 7 metros",
            "c) Cartão vermelho para o guarda-redes nº. 1 da equipa BRANCA",
            "d) Cartão azul para o guarda-redes nº. 1 da equipa BRANCA",
            "e) Lançamento de baliza"
        ],
        "correta": [
            2,
            4
        ],
        "regra": 8
    },
    {
        "pergunta": "8.47) A equipa BRANCA está no ataque e joga com 7 jogadores de campo. O jogador nº. 5 da equipa PRETA intercepta um passe e obtém a posse da bola. Ele imediatamente tenta fazer um remate à baliza. O jogador nº. 2 da equipa BRANCA tenta evitar que o jogador nº. 5 da equipa PRETA remate à baliza, tentando puxar-lhe a bola para fora da mão. Ao fazê-lo, ele atinge o antebraço do jogador nº. 5 da equipa PRETA, a bola cai e passa a linha de saída de baliza. A equipa BRANCA anteriormente no jogo, já recebeu 3 advertências. Qual a decisão correta?",
        "opcoes": [
            "a) Lançamento de baliza para a equipa BRANCA",
            "b) Lançamento livre para a equipa PRETA",
            "c) Livre de 7 metros para a equipa PRETA",
            "d) Exclusão de 2 minutos para o jogador nº. 2 da equipa BRANCA",
            "e) Time-out"
        ],
        "correta": 2,
        "regra": 8
    },
    {
        "pergunta": "8.48) A equipa BRANCA está no ataque e joga com 7 jogadores de campo. O jogador nº. 5 da equipa PRETA intercepta um passe e obtém a posse da bola. Ele imediatamente tenta fazer um remate à baliza. O jogador nº. 2 da equipa BRANCA tenta evitar que o jogador nº. 5 da equipa PRETA faça o remate à baliza, puxando-o para baixo. A bola passa a linha de saída de baliza da baliza. Qual a decisão correta?",
        "opcoes": [
            "a) Lançamento de baliza para a equipa BRANCA.",
            "b) Lançamento livre para a equipa PRETA.",
            "c) Livre de 7 metros para a equipa PRETA.",
            "d) Exclusão de 2 minutos para o jogador nº. 2 da equipa BRANCA.",
            "e) Time-out"
        ],
        "correta": [
            2,
            3,
            4
        ],
        "regra": 8
    },
    {
        "pergunta": "8.49) A equipa BRANCA está no ataque e joga com 7 jogadores de campo. O jogador nº. 4 da equipa BRANCA faz um remate à baliza, mas a bola é defendida pelo guarda-redes nº. 1 da equipa PRETA. O guarda-redes nº. 1 da equipa PRETA, passa a bola para o jogador nº. 9 da equipa PRETA. Assim que o guarda-redes nº. 12 da equipa BRANCA entra na sua área de baliza, o jogador nº. 9 da equipa PRETA tenta rematar à baliza, mas é impedido por uma falta do jogador nº. 2 da equipa BRANCA. A bola passa pela linha de saída de baliza. Qual a decisão correta?",
        "opcoes": [
            "a) Lançamento de baliza para a equipa BRANCA",
            "b) Lançamento livre para a equipa PRETA",
            "c) Livre de 7 metros para a equipa PRETA"
        ],
        "correta": 1,
        "regra": 8
    },
    {
        "pergunta": "8.50) A equipa BRANCA está no ataque e joga com 7 jogadores de campo. O jogador nº. 4 da equipa BRANCA, faz um remate à baliza, mas a bola é defendida pelo guarda-redes nº. 1 da equipa PRETA, que fica de pé com a bola na sua área de baliza pronto para executar o lançamento de baliza. Nesse momento, o delegado interrompe o jogo por causa de uma substituição irregular porque o guarda-redes nº. 1 da equipa BRANCA entrou em campo, antes do jogador nº. 7 da equipa BRANCA sair. Qual a decisão correta?",
        "opcoes": [
            "a) Lançamento de baliza para a equipa PRETA após o sinal de apito",
            "b) Time-out",
            "c) Lançamento livre para a equipa PRETA",
            "d) Livre de 7 metros para a equipa PRETA",
            "e) Exclusão de 2 minutos para o guarda-redes nº. 1 da equipa BRANCA",
            "f) Exclusão de 2 minutos para o jogador nº. 7 da equipa BRANCA"
        ],
        "correta": [
            0,
            1,
            4
        ],
        "regra": 8
    },
    {
        "pergunta": "8.51) A equipa BRANCA está no ataque e joga com 7 jogadores de campo. O jogador nº. 4 da equipa BRANCA faz um remate à baliza, mas a bola é defendida pelo guarda-redes nº. 12 da equipa PRETA. O guarda-redes nº. 12 da equipa PRETA, passa a bola para o jogador nº. 9 da equipa PRETA. O jogador nº. 9 da equipa PRETA faz um remate à baliza. O jogador nº. 10 da equipa BRANCA, entra na sua própria área de baliza e consegue defender a bola. A bola passa pela linha de saída de baliza. Qual a decisão correta?",
        "opcoes": [
            "a) Reposição de bola em jogo para a equipa PRETA",
            "b) Lançamento livre para a equipa PRETA",
            "c) Livre de 7 metros para a equipa PRETA",
            "d) Sanção progressiva para jogador nº. 10 da equipa BRANCA",
            "e) Exclusão direta de 2 minutos para jogador nº. 10 da equipa BRANCA."
        ],
        "correta": [
            2,
            4
        ],
        "regra": 8
    },
    {
        "pergunta": "8.52) A equipa BRANCA está no ataque e joga com 7 jogadores de campo. O jogador nº. 6 da equipa BRANCA faz um remate à baliza, mas a bola é defendida pelo guarda-redes nº. 1 da equipa PRETA. O guarda-redes nº. 1 da equipa PRETA imediatamente tenta marcar na baliza vazia, mas erra a baliza, e a bola passa a linha de saída de baliza. Qual a decisão correta?",
        "opcoes": [
            "a) Lançamento de baliza para a equipa BRANCA.",
            "b) O lançamento de baliza pode ser executado por qualquer jogador em campo da equipa BRANCA para manter o fluxo de jogo.",
            "c) A equipa BRANCA tem de fazer uma substituição de forma a ter um guarda-redes em campo para executar o lançamento de baliza.",
            "d) O time-out é obrigatório."
        ],
        "correta": [
            0,
            2
        ],
        "regra": 8
    },
    {
        "pergunta": "8.53) A equipa PRETA está a jogar com 7 jogadores de campo. O jogador nº. 5 da equipa PRETA, faz um remate à baliza, mas o remate é defendido pelo guarda-redes nº. 1 da equipa BRANCA. O guarda-redes nº. 1 da equipa BRANCA tenta marcar na baliza vazia. Ao mesmo tempo, o guarda-redes nº. 12 da equipa PRETA, faz uma substituição irregular e corre para o campo antes do jogador nº. 7 da equipa PRETA sair. O delegado interrompe imediatamente o jogo com um sinal de apito. Logo após o sinal de apito do delegado, a bola transpõe a linha de saída de baliza da equipa PRETA. Qual a decisão correta?",
        "opcoes": [
            "a) Exclusão de 2 minutos para o jogador nº. 12 da equipa PRETA",
            "b) Exclusão de 2 minutos para o jogador nº. 7 da equipa PRETA",
            "c) Lançamento livre para a equipa BRANCA",
            "d) Livre de 7 metrospara a equipa BRANCA",
            "e) Lançamento de baliza para a equipa PRETA"
        ],
        "correta": [
            0,
            2
        ],
        "regra": 8
    },
    {
        "pergunta": "8.54) A equipa PRETA está a jogar com 7 jogadores de campo. O jogador nº. 6 da equipa PRETA, faz um remate à baliza, mas o remate é defendido pelo guarda-redes nº. 1 da equipa BRANCA. O guarda-redes nº. 1 da equipa BRANCA tenta marcar na baliza vazia. Ao mesmo tempo, o guarda-redes nº. 12 da equipa PRETA. faz uma substituição irregular, e corre para o campo antes do jogador nº. 7 da equipa PRETA sair. O delegado interrompe imediatamente o jogo com um sinal de apito. Logo após o sinal de apito do delegado, a bola transpõe a linha de baliza da equipa PRETA. Qual a decisão correta?",
        "opcoes": [
            "a) Exclusão de 2 minutos para o jogador nº. 12 da equipa PRETA.",
            "b) Exclusão de 2 minutos para o jogador nº. 7 da equipa PRETA.",
            "c) Lançamento livre para a equipa BRANCA.",
            "d) Livre de 7 metrospara a equipa BRANCA.",
            "e) Golo para a equipa BRANCA."
        ],
        "correta": [
            0,
            3
        ],
        "regra": 8
    },
    {
        "pergunta": "8.55) A equipa PRETA está a jogar com 7 jogadores de campo. O jogador nº. 9 da equipa BRANCA intercepta a bola e consegue marcar na baliza vazia. A bola fica na área da baliza. Qual a decisão correta?",
        "opcoes": [
            "a) Golo e lançamento de saída para a equipa PRETA.",
            "b) Time-out.",
            "c) Um guarda-redes deve entrar no campo, através de uma substituição correta para obter a bola na área de baliza.",
            "d) A bola pode ser apanhada por qualquer jogador de campo da equipa PRETA."
        ],
        "correta": [
            0,
            3
        ],
        "regra": 8
    },
    {
        "pergunta": "8.56) O marcador está 27-27 com 6 segundos por jogar de jogo. A equipa BRANCA está no ataque, quando o jogador nº. 7 da equipa BRANCA, tenta passar a bola ao jogador nº. 3 da equipa BRANCA. O jogador nº. 7 da equipa PRETA, intercepta a bola. Naquele momento, é puxado para baixo pelo jogador nº. 3 da equipa BRANCA. Um segundo depois, o sinal final do relógio de campo soa para terminar o jogo. Qual a decisão correta?",
        "opcoes": [
            "a) O jogo acabou.",
            "b) Lançamento livre para a equipa PRETA.",
            "c) Livre de 7 metros para a equipa PRETA.",
            "d) Exclusão de 2 minutos para o jogador nº. 3 da equipa BRANCA.",
            "e) Desqualificação para o jogador nº. 3 da equipa BRANCA (cartão vermelho mostrado pelos árbitros).",
            "f) Desqualificação com relatório escrito para o jogador nº. 3 da equipa BRANCA (cartões vermelho e azul mostrados pelos árbitros.)"
        ],
        "correta": [
            1,
            3
        ],
        "regra": 8
    },
    {
        "pergunta": "8.57) O marcador é 27-27 a 10 segundos do jogo terminar. A equipa BRANCA está no ataque. O jogador nº. 5 da equipa PRETA intercepta um passe e inicia um contra-ataque. De seguida, ele é atacado por trás pelo jogador nº. 11 da equipa BRANCA, que de uma forma perigosa empurra-o de modo que ele perde o controlo do corpo. Antes do árbitro apitar para a falta, o sinal final do relógio de campo soa. Qual a decisão correta?",
        "opcoes": [
            "a) O jogo acabou.",
            "b) Lançamento livre para a equipa PRETA.",
            "c) Livre de 7 metros para a equipa PRETA.",
            "d) Exclusão de 2 minutos para o jogador nº. 11 da equipa BRANCA.",
            "e) Desqualificação para o jogador nº. 11 da equipa BRANCA (cartão vermelho mostrado pelos árbitros).",
            "f) Desqualificação com relatório escrito para o jogador nº. 11 da equipa BRANCA (cartões vermelho e azul mostrados pelos árbitros)."
        ],
        "correta": [
            2,
            4
        ],
        "regra": 8
    },
    {
        "pergunta": "8.58) O jogador nº. 10 da equipa PRETA está na posse da bola. O tempo de jogo é 59:27 quando ele executa um remate em salto. O jogador nº. 2 da equipa BRANCA empurra-o com muita força no peito e ele perde totalmente o controlo do corpo e cai com a bola no chão. O árbitro apita e o relógio é parado aos 59:31. Qual a decisão correta?",
        "opcoes": [
            "a) Lançamento livre para a equipa PRETA.",
            "b) Livre de 7 metros para a equipa PRETA.",
            "c) Exclusão de 2 minutos para o jogador nº. 2 da equipa BRANCA",
            "d) Desqualificação para o jogador nº. 2 da equipa BRANCA (cartão vermelho mostrado pelos árbitros).",
            "e) Time-out."
        ],
        "correta": [
            0,
            3,
            4
        ],
        "regra": 8
    },
    {
        "pergunta": "8.59) A faltar 15 segundos para o final do jogo, a equipa PRETA está na posse da bola. Os árbitros dão lançamento livre para a equipa PRETA na linha central. Antes do jogador nº. 7 da equipa PRETA ser capaz de executar o lançamento livre, é bloqueado pelo jogador nº. 2 da equipa BRANCA. Qual a decisão correta?",
        "opcoes": [
            "a) Time-out.",
            "b) Correção e um novo lançamento livre para a equipa PRETA após o sinal de apito.",
            "c) Livre de 7 metros para a equipa PRETA.",
            "d) Exclusão de 2 minutos para o jogador nº. 2 da equipa BRANCA",
            "e) Desqualificação para o jogador nº. 2 da equipa BRANCA (cartão vermelho mostrado pelos árbitros).",
            "f) Desqualificação com relatório escrito para o jogador nº. 2 da equipa BRANCA (cartões vermelho e azul mostrados pelos árbitros)."
        ],
        "correta": [
            0,
            2,
            4
        ],
        "regra": 8
    },
    {
        "pergunta": "8.60) A equipa PRETA está no ataque. Os árbitros ordenam um lançamento livre para a equipa PRETA na linha de lançamento livre com 3 segundos por jogar no jogo. O jogador nº. 10 da equipa PRETA está na posição correta e pronto para executar o lançamento livre diretamente à baliza, mas o jogador nº. 5 da equipa BRANCA, que está de pé, 1 metro em frente do jogador nº. 10 da equipa PRETA, bloqueia o remate à baliza. Em seguida o sinal final soa. Qual a decisão correta?",
        "opcoes": [
            "a) Livre de 7 metros para a equipa PRETA.",
            "b) Exclusão de 2 minutos para o jogador nº. 5 da equipa BRANCA.",
            "c) Desqualificação para o jogador nº. 5 da equipa BRANCA (cartão vermelho mostrado pelos árbitros).",
            "d) Lançamento livre para a equipa PRETA após o sinal de apito."
        ],
        "correta": [
            0,
            2
        ],
        "regra": 8
    },
    {
        "pergunta": "8.61) A equipa PRETA está no ataque. Os árbitros decidem lançamento livre para a equipa PRETA na linha de lançamento livre, com 3 segundos por jogar no jogo. O jogador nº. 10 da equipa PRETA, está na posição correta para executar o lançamento livre diretamente à baliza, mas antes que ele possa executar o lançamento, é impedido pelo jogador nº. 5 da equipa BRANCA, que se move a uma distância de 1 metro, movendo os braços e saltando na frente do jogador nº. 10 da equipa PRETA. O sinal sonoro final soa. Qual a decisão correta?",
        "opcoes": [
            "a) Exclusão de 2 minutos para o jogador nº. 5 da equipa BRANCA.",
            "b) Desqualificação para o jogador nº. 5 da equipa BRANCA (cartão vermelho mostrado pelos árbitros).",
            "c) Lançamento livre para a equipa PRETA.",
            "d) Livre de 7 metros para a equipa PRETA."
        ],
        "correta": [
            1,
            3
        ],
        "regra": 8
    },
    {
        "pergunta": "8.62) A faltar 19 segundos para o jogo acabar, o jogador nº. 2 da equipa BRANCA está a tentar adiantar-se no marcador, mas os árbitros apitam “passos” contra o jogador nº. 2 da equipa BRANCA. Após o apito dos árbitros, o jogador nº. 2 da equipa BRANCA, faz um remate à baliza. A bola é agarrada pelo guarda-redes nº. 12 da equipa PRETA, e este está pronto para começar um contra-ataque. Qual a decisão correta?",
        "opcoes": [
            "a) Deixar jogar.",
            "b) Time-out.",
            "c) Exclusão de 2 minutos para o jogador nº. 2 da equipa BRANCA.",
            "d) Desqualificação para o jogador nº. 2 da equipa BRANCA (cartão vermelho mostrado pelos árbitros).",
            "e) Lançamento livre para a equipa PRETA.",
            "f) Livre de 7 metrospara a equipa PRETA."
        ],
        "correta": [
            1,
            3,
            5
        ],
        "regra": 8
    },
    {
        "pergunta": "8.63) O marcador está 28 26 para a equipa BRANCA. Com 25 segundos restantes no jogo, a equipa PRETA marca um golo. O guarda-redes nº. 12 da equipa BRANCA chuta a bola de propósito, para as bancadas. É claro que ele chuta a bola com a intenção de atrasar o jogo, para que o lançamento de saída não possa ser executado imediatamente.  Qual é a decisão correta?",
        "opcoes": [
            "a) Time-out",
            "b) Lançamento de saída para a equipa BRANCA.",
            "c) Lançamento livre para a equipa PRETA",
            "d) Livre de 7 metros para a equipa PRETA",
            "e) Exclusão de 2 minutos para o jogador nº. 12 da equipa BRANCA",
            "f) Desqualificação para o jogador nº. 12 da equipa BRANCA (cartão vermelho mostrado pelos árbitros).",
            "g) Desqualificação para o jogador nº. 12 da equipa BRANCA com relatório escrito (cartão vermelho e azul mostrado pelos árbitros)."
        ],
        "correta": [
            0,
            1,
            5
        ],
        "regra": 8
    },
    {
        "pergunta": "8.64) O marcador está 25-25 com 3 segundos restantes no jogo para jogar. A equipa BRANCA está no ataque. O jogador nº. 5 da equipa PRETA origina um lançamento livre contra o jogador nº. 2 da equipa BRANCA na linha de lançamento livre. Pouco depois, o sinal final soa. Os árbitros apitam para a execução do lançamento livre após o sinal final. Antes que a bola tenha saído da mão do lançador, o jogador nº. 6 da equipa PRETA avança e bloqueia a bola muito perto. Qual é a decisão correta?",
        "opcoes": [
            "a) O jogo acabou.",
            "b) O lançamento livre deve ser repetido.",
            "c) Livre de 7 metros para a equipa BRANCA",
            "d) Exclusão de 2 minutos para o jogador nº. 6 da equipa PRETA.",
            "e) Desqualificação para o jogador nº. 6 da equipa PRETA (cartão vermelho mostrado pelos árbitros)."
        ],
        "correta": [
            1,
            3
        ],
        "regra": 8
    },
    {
        "pergunta": "8.65) A equipa BRANCA está a jogar sem guarda-redes e com 7 jogadores de campo. O jogador nº. 5 da equipa PRETA intercepta um passe e corre com a bola na direção da baliza vazia da equipa BRANCA. O guarda-redes nº. 12 da equipa BRANCA entra em campo com uma substituição correta e corre na mesma direção que o jogador nº.5 da equipa PRETA. Assim que o jogador nº. 5 da equipa PRETA remata à baliza, o guarda-redes nº. 12 da equipa BRANCA empurra o jogador nº. 5 da equipa PRETA de lado, de modo que este perde parcialmente o controlo do corpo e como consequência o seu remate falha a baliza. Qual é a decisão correta?",
        "opcoes": [
            "a) Lançamento livre para a equipa PRETA",
            "b) Livre de 7 metros para a equipa PRETA",
            "c) Time-out",
            "d) Exclusão de 2 minutos para o jogador nº. 12 da equipa BRANCA",
            "e) Desqualificação para o jogador nº. 12 da equipa BRANCA (cartão vermelho mostrado pelos árbitros)"
        ],
        "correta": [
            1,
            2,
            3
        ],
        "regra": 8
    },
    {
        "pergunta": "8.66) O marcador está 26 26 com 4 segundos restantes no jogo para jogar. A equipa BRANCA está no ataque. Um lançamento livre é causado pelo jogador nº. 4 da equipa BRANCA. O jogador nº. 4 da equipa BRANCA executa imediatamente o lançamento livre. A bola é ativamente bloqueada pelo jogador nº. 5 da equipa PRETA, que está muito perto. Ao mesmo tempo, o sinal final soa. Qual é a decisão correta?",
        "opcoes": [
            "a) O lançamento livre deve ser repetido.",
            "b) Livre de 7 metros para a equipa BRANCA",
            "c) Exclusão de 2 minutos para o jogador nº. 5 da equipa PRETA",
            "d) Desqualificação para o jogador nº. 5 da equipa PRETA (cartão vermelho mostrado pelos árbitros)"
        ],
        "correta": [
            1,
            3
        ],
        "regra": 8
    },
    {
        "pergunta": "8.67) O marcador está 26-26 faltando 4 segundos para o final da partida. A equipa BRANCA está no ataque. O jogador nº. 5 da equipa PRETA provoca um lançamento livre a favor do jogador nº. 6 da equipa BRANCA. O jogador nº. 5 da equipa PRETA move-se imediatamente de volta para a distância correta. O jogador nº. 6 da equipa BRANCA executa o lançamento livre e a bola bate no jogador nº. 5 da equipa PRETA, que não toma uma ação ativa. A bola ressalta de volta para o jogador nº. 6 da equipa BRANCA. Ao mesmo tempo, o sinal final soa. Qual é a decisão correta?",
        "opcoes": [
            "a) Nenhuma ação adicional. O jogo acabou.",
            "b) O lançamento livre deve ser repetido.",
            "c) Livre de 7 metros para a equipa BRANCA.",
            "d) Exclusão de 2 minutos para o jogador nº. 5 da equipa PRETA.",
            "e) Desqualificação para o jogador nº. 5 da equipa PRETA."
        ],
        "correta": 0,
        "regra": 8
    },
    {
        "pergunta": "8.68) O marcador mostra 29-29 com 20 segundos restantes no jogo para jogar. O guarda-redes nº. 12 da equipa BRANCA defende um remate, e a bola cruza a linha de saída de baliza. Os árbitros decidem lançamento de baliza para a equipa BRANCA. O jogador nº. 12 da equipa BRANCA quer executar rapidamente o lançamento de baliza. O jogador nº. 2 da equipa PRETA corre para a área de baliza e atrasa a execução do lançamento. Qual é a decisão correta?",
        "opcoes": [
            "a) Time-out.",
            "b) Lançamento de baliza para a equipa BRANCA após o apito.",
            "c) Lançamento livre para a equipa BRANCA após o apito.",
            "d) Livre de 7 metros para a equipa BRANCA.",
            "e) Exclusão de 2 minutos para o jogador nº. 2 da equipa PRETA.",
            "f) Desqualificação para o jogador nº. 2 da equipa PRETA (cartão vermelho mostrado pelos árbitros).",
            "g) Desqualificação para o jogador nº. 2 da equipa PRETA com relatório escrito (cartão vermelho e azul exibidos pelos árbitros)."
        ],
        "correta": [
            0,
            3,
            5
        ],
        "regra": 8
    },
    {
        "pergunta": "8.69) O marcador está 29-29 com 20 segundos restantes no jogo para jogar. O guarda-redes nº. 12 da equipa BRANCA defende um remate, e a bola cruza a linha de saída de baliza. Os árbitros decidem lançamento de baliza para a equipa BRANCA. O jogador nº. 12 da equipa BRANCA prepara-se para executar o lançamento de baliza. Antes da bola sair da sua mão, um sinal de apito soa do cronometrista devido a uma substituição irregular feita pela equipa PRETA. O jogador nº. 3 da equipa PRETA entrou em campo antes do jogador nº. 11 da equipa PRETA sair. Qual é a decisão correta?",
        "opcoes": [
            "a) Time-out.",
            "b) Lançamento de baliza para a equipa BRANCA após o apito.",
            "c) Lançamento livre para a equipa BRANCA na área de substituição da equipa PRETA.",
            "d) Livre de 7 metrospara a equipa BRANCA.",
            "e) Exclusão de 2 minutos para o jogador nº. 3 da equipa PRETA.",
            "f) Desqualificação para o jogador nº. 3 da equipa PRETA (cartão vermelho mostrado pelos árbitros)"
        ],
        "correta": [
            0,
            3,
            5
        ],
        "regra": 8
    },
    {
        "pergunta": "8.70) O marcador está 29-29 com 20 segundos restantes no jogo para jogar. O guarda-redes nº. 12 da equipa BRANCA defende um remate, e a bola cruza a linha de saída de baliza. Os árbitros decidem lançamento de baliza para a equipa BRANCA. O jogador nº. 12 da equipa BRANCA executa o lançamento como passe para o jogador nº. 9 da equipa BRANCA, que está de pé do lado de fora da área de baliza. Antes da bola cruzar a linha da área de baliza, um sinal de apito soa do cronometrista devido a uma substituição irregular feita pela equipa PRETA. O jogador nº. 3 da equipa PRETA entrou em campo antes que o jogador nº. 11 da equipa PRETAtivesse saído. Qual é a decisão correta?",
        "opcoes": [
            "a) Time-out",
            "b) Lançamento livre para a equipa BRANCA na área de substituição da equipa PRETA.",
            "c) Livre de 7 metros para a equipa BRANCA.",
            "d) Exclusão de 2 minutos para o jogador nº. 3 da equipa PRETA.",
            "e) Desqualificação para o jogador nº. 3 da equipa PRETA (cartão vermelho mostrado pelos árbitros)"
        ],
        "correta": [
            0,
            2,
            4
        ],
        "regra": 8
    },
    {
        "pergunta": "8.71) O marcador está 29-29, quando faltam 10 segundos de jogo para jogar. A equipa BRANCA está num contra-ataque. O jogador nº. 10 da equipa PRETA ataca o jogador nº. 9 da equipa BRANCA de uma forma que coloca em risco a sua integridade física. Antes de cair, o jogador nº. 9 da equipa BRANCA passa a bola para o jogador nº. 11 da equipa BRANCA. O jogador nº. 11 da equipa BRANCA remata à baliza, mas a bola é defendida pelo guarda-redes nº. 12 da equipa PRETA. Qual é a decisão correta?",
        "opcoes": [
            "a) Exclusão de 2 minutos para o jogador nº. 10 da equipa PRETA.",
            "b) Desqualificação para o jogador nº. 10 da equipa PRETA (cartão vermelho mostrado pelos árbitros).",
            "c) Lançamento de baliza para a equipa PRETA.",
            "d) Lançamento livre para a equipa BRANCA.",
            "e) Livre de 7 metros para a equipa BRANCA.",
            "f) Time-out."
        ],
        "correta": [
            1,
            4,
            5
        ],
        "regra": 8
    },
    {
        "pergunta": "8.72) O marcador está 29-29 com 10 segundos restantes no jogo para jogar. A equipa BRANCA está num contra-ataque. O jogador nº. 10 da equipa PRETA atinge o jogador nº. 9 da equipa BRANCA de uma forma que é perigosa para a sua integridade física. Antes de cair, o jogador nº. 9 da equipa BRANCA passa a bola para o jogador nº. 11 da equipa BRANCA. O jogador nº. 11 da equipa BRANCA marca um golo. Qual é a decisão correta?",
        "opcoes": [
            "a) Exclusão de 2 minutos para o jogador nº. 10 da equipa PRETA.",
            "b) Desqualificação para o jogador nº. 10 da equipa PRETA (cartão vermelho mostrado pelos árbitros).",
            "c) Golo para a equipa BRANCA.",
            "d) Lançamento livre para a equipa BRANCA.",
            "e) Livre de 7 metros para a equipa BRANCA.",
            "f) Time-out."
        ],
        "correta": [
            1,
            2,
            5
        ],
        "regra": 8
    },
    {
        "pergunta": "8.73) O marcador está 29-29 com 10 segundos restantes no jogo para jogar. A equipa BRANCA está num contra-ataque. O jogador nº. 10 da equipa PRETA atinge o jogador nº. 9 da equipa BRANCA de uma forma que é perigosa para a sua integridade física. Antes de cair, o jogador nº. 9 da equipa BRANCA passa a bola para o jogador nº. 11 da equipa BRANCA. O jogador nº. 11 da equipa BRANCA passa a bola para o jogador nº.4 da equipa BRANCA. Qual é a decisão correta?",
        "opcoes": [
            "a) Exclusão de 2 minutos para o jogador nº. 10 da equipa PRETA",
            "b) Desqualificação para o jogador nº. 10 da equipa PRETA (cartão vermelho mostrado pelos árbitros).",
            "c) O árbitro apita após o passe do jogador nº. 11 da equipa BRANCA para o jogador nº. 4 da equipa BRANCA",
            "d) Lançamento livre para a equipa BRANCA",
            "e) Livre de 7 metros para a equipa BRANCA",
            "f) Time-out"
        ],
        "correta": [
            1,
            2,
            4,
            5
        ],
        "regra": 8
    },
    {
        "pergunta": "8.74) O jogador nº. 7 da equipa BRANCA está em contra-ataque. Ele tem uma clara oportunidade de golo e remata à baliza sem qualquer oposição. A bola atinge a cabeça do guarda-redes nº. 12 da equipa PRETA e este cai no chão. A bola no ressalto é recuperada pelo jogador nº. 9 da equipa BRANCA, que tem uma clara hipótese de marcar na linha de área de baliza da equipa PRETA. Nesse momento, os árbitros apitam para permitir assistência médica ao guarda-redes nº. 12 da equipa PRETA. Qual a decisão correta?",
        "opcoes": [
            "a) Exclusão de 2 minutos para BRANCO 7.",
            "b) Lançamento de BALIZA para a equipa PRETA.",
            "c) Lançamento livre para a equipa BRANCA.",
            "d) Livre de 7 metros para a equipa BRANCA.",
            "e) Lançamento livre para a equipa PRETA.",
            "f) Nenhuma punição para BRANCO 7.",
            "g) O guarda-redes PRETO 12 deve deixar o campo de jogo e só pode voltar a entrar após a sua equipa completar 3 ataques.",
            "h) Time-out."
        ],
        "correta": [
            0,
            4,
            7
        ],
        "regra": 8
    },
    {
        "pergunta": "8.75) A equipa BRANCA ganha por um golo quando faltam 7 segundos para o fim do jogo. A equipa BRANCA está pronta para executar um lançamento de saída a partir da área de saída (dentro do círculo central), e os árbitros dão o sinal de apito para a sua execução. Em vez de passar a bola para um companheiro de equipa, o jogador BRANCO 7 coloca a bola no chão dentro da área de lançamento (círculo central) e vai embora. Nenhum companheiro de equipa está interessado em entrar na área de lançamento (círculo central) para agarrar a bola. Qual a decisão correta?",
        "opcoes": [
            "a) Correção do lançamento.",
            "b) Time-out.",
            "c) Os árbitros devem aguardar 3 segundos após o apito para a execução se efetuar, isto antes de poderem decidir um lance livre para a equipa PRETA.",
            "d) Exclusão direta de 2 minutos para BRANCO 7.",
            "e) Lançamento livre para a equipa PRETA."
        ],
        "correta": [
            1,
            3,
            4
        ],
        "regra": 8
    },
    {
        "pergunta": "8.76) O jogador nº. . 8 da equipa PRETA ultrapassa a defesa da equipa BRANCA e não tem jogadores entre ele e o guarda-redes BRANCO 1. Quando ele está prestes a rematar à baliza, ele é empurrado de lado por BRANCO 7. Mesmo perdendo parcialmente o controlo do corpo, ele é capaz de rematar com força à baliza. A bola atinge a cabeça do guarda-redes BRANCO 1, muda de direção e entra na baliza. Qual a decisão correta?",
        "opcoes": [
            "a) Golo para a equipa PRETA",
            "b) Lance livre para a equipa BRANCA",
            "c) Exclusão direta de 2 minutos para PRETO 8",
            "d) Exclusão direta de 2 minutos para BRANCO 7",
            "e) Livre de 7 metros para a equipa PRETA",
            "f) Time-out"
        ],
        "correta": [
            0,
            3,
            5
        ],
        "regra": 8
    },
    {
        "pergunta": "8.77) O jogador ponta nº. 8 da equipa PRETA recebe a bola. Quando ele está a tentar virar-se em direção à baliza é agarrado com força e puxado para baixo por BRANCO 7. No entanto, PRETO 8 recupera o controlo total do corpo. Sem jogadores entre ele e o Guarda-redes, ele salta por cima da área de baliza e remata forte com o controlo total do corpo. A bola atinge a cabeça do guarda-redes BRANCO 1. A cabeça foi o primeiro ponto de contato da bola. A bola muda de direção e entra na baliza. Qual a decisão correta?",
        "opcoes": [
            "a) Golo para a equipa PRETA",
            "b) Lance livre para a equipa BRANCA",
            "c) Lance livre para a equipa PRETA",
            "d) Livre de 7 metros para a equipa PRETA",
            "e) Exclusão direta de 2 minutos para PRETO 8",
            "f) Exclusão direta de 2 minutos para BRANCO 7",
            "g) Time-out"
        ],
        "correta": [
            1,
            4,
            5,
            6
        ],
        "regra": 8
    },
    {
        "pergunta": "8.78) O jogador ponta PRETO 3 tem uma clara oportunidade de marcar e remata à baliza. A bola toca na lateral da cabeça do guarda-redes BRANCO 1 sem mudar de direção. A bola entra na baliza. Qual a decisão correta?",
        "opcoes": [
            "a) Exclusão direta de 2 minutos para PRETO 3.",
            "b) Sanção progressiva para BRANCO 1.",
            "c) Golo.",
            "d) Lance-livre para a equipa BRANCA"
        ],
        "correta": 2,
        "regra": 8
    },
    {
        "pergunta": "8.79) O ponta PRETO 3 tem uma clara oportunidade de marcar e remata à baliza. A bola atinge a lateral da cabeça do guarda-redes BRANCO 1 e muda de direção. A cabeça é o primeiro ponto de contato com a bola. A bola entra na baliza. BRANCO 1 cai no chão, coloca a mão na cabeça e claramente precisa de assistência médica. Qual a decisão correta?",
        "opcoes": [
            "a) Time-out.",
            "b) Os árbitros solicitam assistência médica para BRANCO 1 efetuando os sinais manuais 15 e 16.",
            "c) Exclusão direta de 2 minutos para PRETO 3.",
            "d) Sanção progressiva para BRANCO 1.",
            "e) Golo.",
            "f) Lance livre para a equipa BRANCA.",
            "g) Após receber assistência médica BRANCO 1 deve deixar o campo de jogo e só pode voltar a entrar depois que a sua equipa completar 3 ataques."
        ],
        "correta": [
            0,
            1,
            2,
            5
        ],
        "regra": 8
    },
    {
        "pergunta": "9.1) O jogador nº. 7 da equipa BRANCA está no centro da defesa, quando o jogador nº. 3 da equipa PRETA tenta fazer um passe picado. O jogador nº. 7 da equipa BRANCA tenta parar a bola com o pé e não é a primeira vez que faz isso. A bola atinge o pé e entra na baliza da equipa BRANCA. Qual a decisão correta?",
        "opcoes": [
            "a) Lançamento livre para a equipa PRETA.",
            "b) Golo para a equipa PRETA.",
            "c) Livre de 7 metros para a equipa PRETA.",
            "d) Exclusão de 2 minutos para o jogador nº. 7 da equipa BRANCA."
        ],
        "correta": [
            1,
            3
        ],
        "regra": 9
    },
    {
        "pergunta": "9.2) Um remate do jogador nº. 5 da equipa BRANCA, bate no poste da baliza da equipa PRETA. A bola ressalta e bate no pé do jogador nº. 3 da equipa PRETA que está na área de jogo, e entra na baliza da equipa PRETA. Qual a decisão correta? ",
        "opcoes": [
            "a) Lançamento livre para a equipa BRANCA.",
            "b) Golo para a equipa BRANCA.",
            "c) Livre de 7 metros para a equipa BRANCA.",
            "d) Lançamento de baliza para a equipa PRETA."
        ],
        "correta": 1,
        "regra": 9
    },
    {
        "pergunta": "9.3) A bola foi defendida pelo guarda-redes nº. 1 da equipa BRANCA, bate nas costas do jogador nº. 3 da equipa BRANCA que está 2 metros dentro da área de baliza, e entra na baliza da equipa BRANCA. Qual a decisão correta?",
        "opcoes": [
            "a) Lançamento livre para a equipa PRETA.",
            "b) Livre de 7 metros para a equipa PRETA.",
            "c) Sanção progressiva para o jogador nº. 3 da equipa BRANCA.",
            "d) Golo para a equipa PRETA."
        ],
        "correta": 3,
        "regra": 9
    },
    {
        "pergunta": "9.4) O guarda-redes nº. 1 da equipa BRANCA agarra a bola por 4 segundos numa posição em que três quartos da bola já passaram a linha de baliza. Qual a decisão correta?",
        "opcoes": [
            "a) Golo para a equipa PRETA",
            "b) Lançamento livre para a equipa PRETA",
            "c) Lançamento de baliza para a equipa BRANCA"
        ],
        "correta": 2,
        "regra": 9
    },
    {
        "pergunta": "9.5) O jogador nº. 3 da equipa BRANCA entra na área de baliza da sua equipa e tenta parar um remate com o pé, mas a bola ressalta do seu pé para dentro da baliza da equipa BRANCA. Qual a decisão correta?",
        "opcoes": [
            "a) Lançamento livre para a equipa PRETA.",
            "b) Livre de 7 metros para a equipa PRETA.",
            "c) Golo para a equipa PRETA.",
            "d) Lançamento de baliza para a equipa BRANCA."
        ],
        "correta": 2,
        "regra": 9
    },
    {
        "pergunta": "9.6) O jogador nº. 11 da equipa BRANCA faz um “chapéu” ao guarda-redes nº. 1 da equipa PRETA, que está longe da baliza. Pouco antes da bola cruzar a linha de baliza, o treinador da equipa PRETA, que tem estado sentado na primeira fila de cadeiras dos espetadores, atrás da baliza, e não está inscrito no boletim de jogo, empurra a bola para longe, impedindo-a de entrar na baliza. Qual a decisão correta?",
        "opcoes": [
            "a) Livre de 7 metros para a equipa BRANCA.",
            "b) Golo para a equipa BRANCA.",
            "c) Desqualificação do treinador da equipa PRETA com relatório escrito (cartões vermelho e azul mostrados pelos árbitros),",
            "d) Relatório escrito"
        ],
        "correta": [
            1,
            3
        ],
        "regra": 9
    },
    {
        "pergunta": "9.7) Com o marcador 25-25 e com 2 segundos para jogar no jogo, um oficial da equipa BRANCA (equipa da casa), que não está inscrito no boletim de jogo, intercepta a bola, que está a voar alto na direção da baliza vazia. Esta ação impede um golo para a equipa PRETA. A ação é imediatamente seguida pelo sinal final. Qual a decisão correta?",
        "opcoes": [
            "a) Resultado final 25-25.",
            "b) Livre de 7 metrospara a equipa PRETA.",
            "c) Resultado final 25-26.",
            "d) Desqualificação do oficial com relatório escrito (cartões vermelho e azul mostrados pelos árbitros).",
            "e) Relatório escrito."
        ],
        "correta": [
            2,
            4
        ],
        "regra": 9
    },
    {
        "pergunta": "9.8) Golo para a equipa PRETA através de um livre de 7 metros, pelo jogador nº. 9 da equipa PRETA. A equipa BRANCA imediatamente faz o lançamento de saída, após o apito do árbitro. Após dois passes, o jogador nº. 4 da equipa BRANCA marca um golo. Nesse momento, o cronometrista apita e informa, que o jogador nº. 9 da equipa PRETA, que tinha voltado do banco, entretanto, tem 20 segundos ainda para cumprir de uma exclusão de 2 minutos, no momento do livre de 7 metros. Qual a decisão correta?",
        "opcoes": [
            "a) O livre de 7 metrospara a equipa PRETA deve ser repetido.",
            "b) O jogador nº. 9 da equipa PRETA recebe uma exclusão adicional.",
            "c) Ambos os golos são válidos.",
            "d) Ambos os golos são inválidos."
        ],
        "correta": [
            1,
            2
        ],
        "regra": 9
    },
    {
        "pergunta": "9.9) Pouco antes do final do jogo, quando o resultado é 22-21 para a sua equipa, o jogador nº. 5 da equipa BRANCA, executa um lançamento de saída corretamente. A bola vai para trás na direção da baliza da equipa BRANCA. O guarda-redes nº. 1 da equipa BRANCA não toca na bola, mas está na sua área de baliza. A bola entra na baliza. Os companheiros do jogador nº. 5 da equipa BRANCA, tinham cruzado a linha central após o apito do árbitro, mas antes da bola ser jogada, correndo na direção da baliza da equipa PRETA. Qual a decisão correta?",
        "opcoes": [
            "a) Golo para a equipa PRETA.",
            "b) Lançamento livre para a equipa PRETA.",
            "c) Repetição do lançamento de saída após o sinal de apito.",
            "d) Sanção pessoal para o jogador nº. 5 da equipa BRANCA.",
            "e) Time-out."
        ],
        "correta": 0,
        "regra": 9
    },
    {
        "pergunta": "9.10) O jogador nº. 9 da equipa BRANCA tenta parar um remate baixo com a canela, levantando claramente o pé, mas ao fazê-lo, ele desvia a bola que acaba por entrar na sua própria baliza. Esta é a segunda vez que ele tenta parar um remate com a canela. Qual a decisão correta?",
        "opcoes": [
            "a) Golo para a equipa PRETA.",
            "b) Lançamento livre para a equipa PRETA.",
            "c) Exclusão de 2 minutos para o jogador nº. 9 da equipa BRANCA."
        ],
        "correta": [
            0,
            2
        ],
        "regra": 9
    },
    {
        "pergunta": "10.1) A equipa BRANCA ganha o sorteio da moeda ao ar e decide começar com a bola. O representante da equipa PRETA quer mudar de campo. Qual a decisão correta?",
        "opcoes": [
            "a) A mudança de campo efetua-se.",
            "b) A mudança de campo efetua-se, se a equipa BRANCA concordar.",
            "c) Repete-se o sorteio da moeda ao ar.",
            "d) A mudança de campo não se efetua"
        ],
        "correta": 0,
        "regra": 10
    },
    {
        "pergunta": "10.2) A equipa BRANCA ganha o sorteio de moeda ao ar e quer mudar de campo. A equipa PRETA quer que a equipa BRANCA faça o lançamento de saída. Qual a decisão correta?",
        "opcoes": [
            "a) Lançamento de saída pela equipa BRANCA.",
            "b) Mudar de campo e lançamento de saída para equipa PRETA.",
            "c) Repetir o sorteio de moeda ao ar.",
            "d) Os representantes das equipas devem chegar a um acordo."
        ],
        "correta": 1,
        "regra": 10
    },
    {
        "pergunta": "10.3) (Sem área de lançamento de saída) - De onde pode o lançamento de saída ser executado?",
        "opcoes": [
            "a) Até 3 metros atrás da linha central na metade do campo da própria equipa.",
            "b) Até 3 metros ao longo da linha central na metade do campo do adversário.",
            "c) No centro do campo, com um pé na linha central e o outro pé na linha central ou atrás da linha, com uma tolerância lateral de aproximadamente 1,5 metros."
        ],
        "correta": 2,
        "regra": 10
    },
    {
        "pergunta": "10.4) (Sem área de lançamento de saída) - Com o marcador 15-15 e pouco antes do final do jogo a equipa PRETA marca para 15-16. A equipa BRANCA quer fazer o lançamento de saída rapidamente. O jogador com a bola fica no centro do campo com um pé na frente da linha central e um pé atrás da linha. Qual a decisão correta?",
        "opcoes": [
            "a) Corrigir; então dar o sinal de apito para executar o lançamento de saída.",
            "b) A posição está correta; sinal de apito para executar o lançamento de saída.",
            "c) Time-out; correção; sinal de apito para executar o lançamento de saída."
        ],
        "correta": 0,
        "regra": 10
    },
    {
        "pergunta": "10.5) A equipa BRANCA está prestes a executar um lançamento de saída. O guarda-redes nº. 1 da equipa PRETA ainda não está na sua área de baliza. O árbitro central apita para o jogo começar, e o jogador nº. 9 da equipa BRANCA marca um golo imediatamente. Qual a decisão correta?",
        "opcoes": [
            "a) Lançamento livre para a equipa BRANCA da linha central.",
            "b) Repetir o lançamento de saída.",
            "c) Golo para a equipa BRANCA.",
            "d) Lançamento livre para a equipa PRETA."
        ],
        "correta": 2,
        "regra": 10
    },
    {
        "pergunta": "10.6) (Sem área de lançamento de saída) - Que afirmações sobre o lançamento de saída estão corretas?",
        "opcoes": [
            "a) O lançamento de saída deve ser executado dentro dos 3 segundos após o sinal de apito, do centro do campo, e a bola deve ser jogada para o meio campo dos adversários.",
            "b) Um golo contra os adversários pode ser marcado diretamente através de um lançamento de saída.",
            "c) As posições ilegais da equipa que está a defender devem ser corrigidas.",
            "d) Se o lançador dribla a bola após o sinal de apito para executar o lançamento de saída, então um lançamento livre deve ser atribuído aos adversários.",
            "e) Os companheiros de equipa do lançador estão autorizados a cruzar a linha central antes do lançamento ser executado."
        ],
        "correta": [
            1,
            3,
            4
        ],
        "regra": 10
    },
    {
        "pergunta": "10.7) (Sem área de lançamento de saída) - O jogador nº. 6 da equipa PRETA aguarda um lançamento de saída no centro do campo com um pé na linha central e com um pé no seu meio campo. O árbitro apita. Antes da bola sair da sua mão, o executante corre sobre a linha central. Na altura do apito, ainda havia jogadores da equipa BRANCA na metade do campo da equipa PRETA. Qual a decisão correta?",
        "opcoes": [
            "a) O jogo continua sem interrupção",
            "b) Lançamento livre para a equipa BRANCA.",
            "c) Correção das posições da equipa BRANCA e repetir o lançamento de saída após o sinal de apito.",
            "d) Correção da posição do jogador nº. 6 da equipa PRETA e repetir o lançamento de saída após o sinal de apito."
        ],
        "correta": 1,
        "regra": 10
    },
    {
        "pergunta": "10.8) (Com área de lançamento de saída) - A equipa BRANCA marcou um golo. A equipa PRETA quer executar um lançamento de saída rápidamente. PRETO 9 está numa posição correta dentro da área de lançamento. Após os árbitros apitarem para a execução, o PRETO 9 dá 6 passos com a bola dentro da área de lançamento. Após o sinal de apito para a execução do lançamento de saída, dentro de 3 segundos, PRETO 9 arremessa a bola para a baliza vazia da equipa BRANCA. Qual a decisão correta?",
        "opcoes": [
            "a) Golo para a equipa PRETA.",
            "b) Lance livre para a equipa BRANCA.",
            "c) Correção, e novo lançamento de saída após o apito dos árbitros."
        ],
        "correta": 0,
        "regra": 10
    },
    {
        "pergunta": "10.9) (Com área de lançamento de saída) - A equipa BRANCA marcou um golo. A equipa PRETA quer executar um lançamento de saída rapidamente. PRETO 9 recebe a bola. Ele tem a bola e um pé completamente dentro da área de lançamento de saída. O outro pé está fora da área de lançamento. Os árbitros apitam para a execução do lance. Antes de PRETO 9 mover o outro pé dentro da área de lançamento, ele lança a bola para a baliza vazia da equipa BRANCA. Qual a decisão correta?",
        "opcoes": [
            "a) Golo para a equipa PRETA",
            "b) Lançamento livre para a equipa BRANCA",
            "c) Correção, novo lançamanto para a equipa PRETA após o apito dos árbitros.",
            "d) O lançamento é executado corretamente, pois os árbitros, dando o sinal de apito para a execução, aprovaram a posição do lançador."
        ],
        "correta": 1,
        "regra": 10
    },
    {
        "pergunta": "10.10) (Com área de lançamento de saída) - A equipa BRANCA marcou um golo. A equipa PRETA quer executar um lançamento de saída rápidamente desde a área de lançamento. Ao mesmo tempo que PRETO 8 está correndo com um pé e a bola completamente dentro da área de lançamento de saída, BRANCO 7 está também dentro da área de lançamento, correndo na direção da sua própria baliza. Sem colegas de equipa na direção de BRANCO 7, PRETO 8 joga/atira a bola contra as costas de BRANCO 7. BRANCO 7 está dentro da área de lançamento de saída, quando a bola o atinge. Qual a decisão correta?",
        "opcoes": [
            "a) Lançamento livre para a equipa BRANCA",
            "b) Lançamento livre para a equipa PRETA",
            "c) Livre de 7 metros para a equipa PRETA",
            "d) Sanção progressiva para BRANCO 7",
            "e) Sanção progressiva para PRETO 8",
            "f) Exclusão direta de 2 minutos para PRETO 8"
        ],
        "correta": [
            0,
            5
        ],
        "regra": 10
    },
    {
        "pergunta": "10.11) (Com área de lançamento de saída) - Qual das seguintes afirmações sobre a área de lançamento de saída estão incorrectas?",
        "opcoes": [
            "a) O sinal de apito para a execução do lançamento pode ser dado quando o lançador tem uma parte do corpo dentro da área de lançamento.",
            "b) Não existe qualquer restrição relativamente às posições dos colegas de equipa do executante durante a execução de um lançamento.",
            "c) É permitido ao lançador sair da área de lançamento durante a execução do lançamento.",
            "d) É permitido a um jogador da equipa defensora intercetar a bola após a execução, mesmo que a bola ainda se encontre dentro da área de lançamento.",
            "e) O lançador não pode driblar a bola após o apito para a execução."
        ],
        "correta": [
            0,
            1,
            2,
            3
        ],
        "regra": 10
    },
    {
        "pergunta": "10.12) (Com área de lançamento de saída) - A equipa BRANCA joga com 7 jogadores de campo e marca um golo. A equipa PRETA quer executar um lançamento rápido. O jogador nº. .6 da equipa PRETA tem um pé e a bola dentro da área de lançamento de saída. Os árbitros apitam para a execução. BRANCO 8 entra claramente na área de lançamento de saída com os braços activos tentando bloquear a bola e interfere com a execução do lançamento. Mesmo assim, o jogador nº6 da equipa PRETA, que tem todo o seu corpo e a bola dentro da área de lançamento, executa o lançamento como um remate à baliza vazia. A bola ultrapassa a linha exterior de baliza. Qual é a decisão correcta?",
        "opcoes": [
            "a) Lançamento de guarda-redes para a equipa BRANCA.",
            "b) Novo lançamento de saída após o sinal de apito.",
            "c) Lançamento livre para a equipa PRETA.",
            "d) Livre de 7 metros para a equipa PRETA.",
            "e) Time-out.",
            "f) Sanção progressiva para o jogador nº. . 8 da equipa BRANCA.",
            "g) Exclusão direta de 2 minutos para o jogador nº. . 8 da equipa BRANCA.",
            "h) Desqualificação para o jogador nº. . 8 da equipa BRANCA (cartão vermelho mostrado pelos árbitros)"
        ],
        "correta": [
            3,
            4,
            6
        ],
        "regra": 10
    },
    {
        "pergunta": "10.13) (Com área de lançamento de saída) - Quais das seguintes afirmações sobre a área de lançamento de saída estão corretas?",
        "opcoes": [
            "a) O lançamento de saída deve ser executado no espaço de 3 segundos após o sinal de apito para a execução.",
            "b) Um lançamento de saída pode levar a um golo para a equipa executante.",
            "c) Em relação a um lançamento de saída, as posições erradas dos jogadores defensores devem ser corrigidas.",
            "d) Se o executante saltar após o apito para a execução do lançamento, a decisão correta é um lançamento livre para os adversários.",
            "e) Os colegas de equipa do executante não podem cruzar a linha central em nenhum momento antes do apito para a execução do lançamento de saída."
        ],
        "correta": [
            0,
            1,
            3
        ],
        "regra": 10
    },
    {
        "pergunta": "10.14) (Com área de lançamento de saída) - Quando é que o árbitro pode apitar para a execução de um lançamento de saída?",
        "opcoes": [
            "a) Quando o executante tiver pelo menos um pé e a bola dentro da área de lançamento, e o outro pé não estiver fora da área de lançamento na metade do campo da equipa adversária.",
            "b) Quando o executante tiver pelo menos um pé dentro da área de lançamento, e o outro pé não estiver fora da área de lançamento e na metade do campo do adversário, mas a bola ainda estiver fora da área de lançamento de saída.",
            "c) Quando o executante tiver pelo menos um pé e a bola dentro da área de lançamento, e o outro pé estiver fora da área de lançamento de saída na metade do campo do adversário.",
            "d) Quando o executante tiver pelo menos um pé e a bola dentro da área de lançamento de saída e o outro pé não estiver fora da área de lançamento na metade do campo do adversário, mas os colegas de equipa do executante estiverem dentro da área de lançamento na metade do campo do adversário."
        ],
        "correta": [
            0,
            3
        ],
        "regra": 10
    },
    {
        "pergunta": "11.1) O jogador nº. 3 da equipa BRANCA está a executar uma reposição de bola em jogo de uma posição a 2 metros fora da linha lateral. Qual a decisão correta?",
        "opcoes": [
            "a) Nada, isto é permitido.",
            "b) Lançamento livre para a equipa PRETA.",
            "c) Repetir a reposição de bola em jogo sem sinal de apito.",
            "d) Repetir a reposição de bola em jogo após sinal de apito."
        ],
        "correta": 3,
        "regra": 11
    },
    {
        "pergunta": "11.2) O jogador nº. 4 da equipa PRETA, está com um pé na linha lateral e com o outro pé na área de jogo. Ele está a executar uma reposição de bola em jogo e marca um golo direto. Qual a decisão correta?",
        "opcoes": [
            "a) Golo para a equipa PRETA.",
            "b) Repetir a reposição de bola em jogo para a equipa PRETA após o sinal de apito.",
            "c) Lançamento livre para a equipa BRANCA.",
            "d) Lançamento de baliza para a equipa BRANCA."
        ],
        "correta": 0,
        "regra": 11
    },
    {
        "pergunta": "11.3) O jogador nº. 6 da equipa BRANCA, executa uma reposição de bola em jogo com um pé dentro de campo e com o outro pé um metro fora da linha lateral. Ele remata e marca golo. Qual a decisão correta?",
        "opcoes": [
            "a) Repetir a reposição de bola em jogo para a equipa BRANCA após sinal de apito.",
            "b) Lançamento livre para a equipa PRETA",
            "c) Golo para a equipa BRANCA.",
            "d) Lançamento de baliza para a equipa PRETA."
        ],
        "correta": 0,
        "regra": 11
    },
    {
        "pergunta": "11.4) O jogador nº. 11 da equipa BRANCA faz um remate à baliza. A bola bate na trave e atinge o equipamento que está pendurado no teto sobre a área da baliza da equipa PRETA. A partir daí a bola cai nos braços do guarda-redes nº. 1 da equipa PRETA. Qual a decisão correta?",
        "opcoes": [
            "a) Lançamento de baliza para a equipa PRETA.",
            "b) Reposição de bola em jogo para a equipa PRETA.",
            "c) Lançamento livre para a equipa PRETA após o sinal de apito.",
            "d) Reposição de bola em jogo para a equipa PRETA após o sinal de apito.",
            "e) Time-out obrigatório."
        ],
        "correta": 1,
        "regra": 11
    },
    {
        "pergunta": "11.5) Quando é que a equipa que defende está autorizada a estar mais perto do que 3 metros da bola, durante a execução de lançamentos, após uma interrupção do jogo?",
        "opcoes": [
            "a) Assim que o árbitro tiver dado o sinal para a execução do lançamento.",
            "b) Quando a bola deixa a mão do jogador que executa o lançamento.",
            "c) No caso de um lançamento livre ou reposição de bola em jogo, quando os jogadores estão posicionados na sua própria linha de área de baliza.",
            "d) Durante a execução de um lançamento de baliza ou lançamento de saída, quando o jogador defensor se encontra fora da área de baliza ou da área de lançamento."
        ],
        "correta": [
            1,
            2,
            3
        ],
        "regra": 11
    },
    {
        "pergunta": "11.6) O jogador nº. 5 da equipa BRANCA falha a receção de um passe. Ele corre atrás da bola e para-a, antes desta cruzar a linha lateral, mas ele próprio não pode evitar cruzar a linha lateral após a situação. Qual a decisão correta?",
        "opcoes": [
            "a) O jogo continua sem interrupção.",
            "b) Lançamento livre para a equipa PRETA.",
            "c) Reposição de bola em jogo para a equipa PRETA."
        ],
        "correta": 0,
        "regra": 11
    },
    {
        "pergunta": "12.1) Ao executar um lançamento de baliza, o guarda-redes nº. 1 da equipa BRANCA, pisa, sem ultrapassar, a sua linha de baliza com um pé. Qual a decisão correta?",
        "opcoes": [
            "a) O lançamento de baliza deve ser repetido após o sinal de apito.",
            "b) Lançamento livre para a equipa PRETA.",
            "c) Deixar o jogo continuar sem interrupção."
        ],
        "correta": 2,
        "regra": 12
    },
    {
        "pergunta": "12.2) Após o apito para a execução de um Livre de 7 metros, o guarda-redes nº. 12 da equipa BRANCA, pisa a linha de restrição do guarda-redes com um pé. O Livre de 7 metros passa por cima da trave. Qual a decisão correta?",
        "opcoes": [
            "a) O Livre de 7 metrosdeve ser repetido após o sinal de apito.",
            "b) Como não há golo, o jogo continua com um lançamento de baliza.",
            "c) A posição do guarda-redes é correta."
        ],
        "correta": [
            1,
            2
        ],
        "regra": 12
    },
    {
        "pergunta": "12.3) O guarda-redes nº. 1 da equipa BRANCA, defende um remate e mergulha para a bola que rola na área de baliza e para a área de jogo. O jogador nº. 7 da equipa PRETA, está livre e pronto para agarrar a bola. No último momento, o guarda-redes nº. 1 da equipa BRANCA, usa as mãos para bater na bola, que cruza a linha de saída de baliza. Qual a decisão correta?",
        "opcoes": [
            "a) Lançamento livre para a equipa PRETA.",
            "b) Reposição de bola em jogo para a equipa PRETA.",
            "c) Lançamento de baliza para a equipa BRANCA.",
            "d) Lançamento livre para a equipa BRANCA."
        ],
        "correta": 2,
        "regra": 12
    },
    {
        "pergunta": "12.4) Quando o guarda-redes nº. 12 da equipa BRANCA está a executar um lançamento de baliza, ele deixa cair a bola. A bola bate-lhe no pé. Em seguida, a bola cruza a linha da área da baliza, em direção à área de jogo. O guarda-redes nº. 12 da equipa BRANCA, corre atrás da bola, pega-lhe, e volta à sua área de baliza para repetir o lançamento de baliza. Qual a decisão correta?",
        "opcoes": [
            "a) Livre de 7 metrospara a equipa PRETA.",
            "b) Lançamento livre para a equipa PRETA.",
            "c) Time-out.",
            "d) Correção, lançamento de baliza após sinal de apito."
        ],
        "correta": 3,
        "regra": 12
    },
    {
        "pergunta": "12.5) Quando é considerado executado um lançamento de baliza, de modo a que a bola possa ser jogada por um jogador de campo?",
        "opcoes": [
            "a) Quando a bola ainda está no ar acima da área de baliza",
            "b) Quando a bola deixa a mão do guarda-redes, passa a linha de área de baliza e entra na área de jogo.",
            "c) Quando a bola deixa a mão do guarda-redes.",
            "d) Quando um companheiro de equipa do guarda-redes toca na bola."
        ],
        "correta": 1,
        "regra": 12
    },
    {
        "pergunta": "12.6) O guarda-redes nº. 12 da equipa BRANCA está a executar um lançamento de baliza. O jogador nº. 10 da equipa PRETA, que está de pé fora da linha da área da baliza, tenta legalmente ganhar a posse da bola. Ele consegue fazê-lo e marca golo. Qual a decisão correta?",
        "opcoes": [
            "a) Lançamento livre para a equipa BRANCA",
            "b) Golo para a equipa PRETA",
            "c) Lançamento de baliza para a equipa BRANCA",
            "d) Sanção progressiva para o jogador nº. 10 da equipa PRETA"
        ],
        "correta": 1,
        "regra": 12
    },
    {
        "pergunta": "12.7) O guarda-redes nº. 12 da equipa BRANCA, defende um remate, desviando a bola através da linha de saída de baliza; que sinal (s) manual deve o árbitro na linha de baliza mostrar, se necessário?",
        "opcoes": [
            "a) Número 8: lançamento de baliza.",
            "b) Número 9: Lançamento livre /direção.",
            "c) Primeiro número 9: lançamento livre /direção, depois número 8: lançamento de baliza.",
            "d) Primeiro número 8: lançamento de baliza, depois número 9: lançamento livre/ direção."
        ],
        "correta": 0,
        "regra": 12
    },
    {
        "pergunta": "12.8) O guarda-redes nº. 1 da equipa BRANCA perde a bola durante a execução de um lançamento de baliza. A bola ressalta na direção da área de jogo, onde o jogador nº. 6 da equipa PRETA está à espera da bola. O jogador nº. 2 da equipa BRANCA mergulha para a área de baliza e empurra a bola, que está no ar, para fora da linha lateral. Qual a decisão correta?",
        "opcoes": [
            "a) Lançamento de baliza para a equipa BRANCA após o sinal de apito",
            "b) Reposição de bola em jogo para a equipa PRETA",
            "c) Lançamento livre para a equipa PRETA",
            "d) Livre de 7 metros para a equipa PRETA"
        ],
        "correta": 0,
        "regra": 12
    },
    {
        "pergunta": "12.9) Que afirmações sobre o lançamento de baliza estão corretas?",
        "opcoes": [
            "a) O Lançamento de baliza é considerado executado quando a bola deixa a mão do guarda-redes.",
            "b) Os adversários devem manter a distância de 3 metros.",
            "c) O lançamento de baliza é considerado executado quando a bola deixa a mão do guarda-redes e passa a linha de área de baliza.",
            "d) Os adversários estão autorizados a estar imediatamente fora da linha de área de baliza."
        ],
        "correta": [
            2,
            3
        ],
        "regra": 12
    },
    {
        "pergunta": "12.10) Lançamento de baliza para a equipa PRETA. O guarda-redes nº. 1 da equipa PRETA está com pressa, porque a sua equipa está a perder o jogo. Ao executar o lançamento de baliza, a bola desliza para fora de sua mão e vai para o jogador nº. 6 da equipa PRETA, que ainda está na área de baliza. O jogador nº. 6 da equipa PRETA rola a bola de volta para o guarda-redes nº. 1 da equipa PRETA com o pé. Qual a decisão correta?",
        "opcoes": [
            "a) Lançamento de baliza para a equipa PRETA após o sinal de apito",
            "b) Lançamento livre para a equipa BRANCA",
            "c) Livre de 7 metros para a equipa BRANCA"
        ],
        "correta": 0,
        "regra": 12
    },
    {
        "pergunta": "12.11) Quais das seguintes afirmações acerca do lançamento de baliza estão corretas?",
        "opcoes": [
            "a) Os jogadores da equipa adversária, devem permanecer fora da linha de lançamento livre até que a bola esteja em jogo.",
            "b) Os jogadores da equipa adversária, devem permanecer fora da linha da área de baliza e a 3 metros de distância da posição, onde o Guarda-redes executa o lançamento de baliza.",
            "c) Os jogadores da equipa adversária, estão autorizados a tocar na bola, antes desta atravessar a linha de área de baliza.",
            "d) O guarda-redes não pode marcar um autogolo, quando está a executar um lançamento de baliza.",
            "e) O guarda-redes, através de um lançamento de baliza, não pode marcar um golo direto contra os adversários.",
            "f) O guarda-redes não está autorizado a pisar a linha da área de baliza, quando está a executar um lançamento de baliza."
        ],
        "correta": 3,
        "regra": 12
    },
    {
        "pergunta": "13.1) Lançamento livre para a equipa BRANCA. Antes do jogador nº. 5 da equipa BRANCA agarrar na bola para executar o lançamento, o jogador nº. 6 da equipa PRETA pega-lhe, coloca-a debaixo do braço e corre com a bola na direção da sua baliza. Depois de dar alguns passos, ele devolve a bola ao jogador nº. 5 da equipa BRANCA, rolando-a pelo chão. Qual a decisão correta?",
        "opcoes": [
            "a) Exclusão de 2 minutos para o jogador nº. 6 da equipa PRETA.",
            "b) Lançamento livre para a equipa BRANCA após o sinal de apito.",
            "c) Advertência para o jogador nº. 6 da equipa PRETA.",
            "d) O jogo continua sem interrupção.",
            "e) Time-out."
        ],
        "correta": [
            0,
            1,
            4
        ],
        "regra": 13
    },
    {
        "pergunta": "13.2) O jogador nº. 7 da equipa PRETA está na posse da bola e tenta iniciar um contra-ataque, mas é agarrado pelo jogador nº. 17 da equipa BRANCA. O árbitro está prestes a apitar, mas aplica a lei da vantagem, uma vez que o jogador nº. 8 da equipa PRETA acaba de receber a bola e remata para a baliza da equipa BRANCA. O guarda-redes nº. 12 da equipa BRANCA, defende o remate e quer começar um contra-ataque. Ambas as equipas já receberam três advertências antes no jogo. Qual a decisão correta?",
        "opcoes": [
            "a) O jogo continua sem interrupção.",
            "b) Exclusão de 2 minutos para jogador nº. 17 da equipa BRANCA.",
            "c) Lançamento de baliza para a equipa BRANCA.",
            "d) Time-ou.t",
            "e) Lançamento livre para a equipa PRETA."
        ],
        "correta": [
            1,
            2,
            3
        ],
        "regra": 13
    },
    {
        "pergunta": "13.3) A equipa BRANCA recebe um lançamento livre. O jogador nº. 6 da equipa PRETA está na posse da bola. Ele traz a bola com ele até 4 metros do lugar, onde o lançamento livre deve ser executado. Qual a decisão correta?",
        "opcoes": [
            "a) Advertência para o jogador nº. 6 da equipa PRETA.",
            "b) Exclusão de 2 minutos para o jogador nº. 6 da equipa PRETA.",
            "c) Desqualificação do jogador nº. 6 da equipa PRETA (cartão vermelho mostrado pelos árbitros).",
            "d) Lançamento livre para a equipa BRANCA no lugar da falta, que levou ao lançamento livre.",
            "e) Lançamento livre para a equipa BRANCA do lugar, onde a bola está."
        ],
        "correta": [
            1,
            3
        ],
        "regra": 13
    },
    {
        "pergunta": "13.4) Um lançamento livre é concedido contra o jogador nº. 4 da equipa BRANCA, que, em seguida, leva a bola, atravessa a área de baliza e coloca a bola no chão. Qual a decisão correta?",
        "opcoes": [
            "a) Exclusão de 2 minutos para o jogador nº. 4 da equipa BRANCA.",
            "b) Advertência para o jogador nº. 4 da equipa BRANCA.",
            "c) Livre de 7 metros para a equipa PRETA.",
            "d) Lançamento livre para a equipa PRETA."
        ],
        "correta": [
            0,
            3
        ],
        "regra": 13
    },
    {
        "pergunta": "13.5) O jogador nº. 5 da equipa BRANCA está na posse da bola, quando o oficial B da equipa BRANCA reclama sobre os árbitros. Os árbitros apitam, fazem time-out e advertem o oficial B da equipa BRANCA. Como o jogo deve ser retomado?",
        "opcoes": [
            "a) Lançamento livre após o sinal de apito para a equipa PRETA na área da substituição da equipa BRANCA.",
            "b) Lançamento livre após o sinal de apito para a equipa BRANCA na área de substituição da equipa BRANCA.",
            "c) Lançamento livre após o sinal de apito para a equipa BRANCA, executado do lugar onde a bola estava, quando o jogo foi interrompido.",
            "d) Reposição de bola em jogo para a equipa PRETA na área de substituição da equipa BRANCA."
        ],
        "correta": 0,
        "regra": 13
    },
    {
        "pergunta": "13.6) O jogo é interrompido por um apito do árbitro central, embora não tenha havido nenhuma violação das regras por qualquer uma das equipas. Nenhum time-out foi dado. O jogador nº. 13 da equipa PRETA, jogou a bola na direção da baliza da equipa BRANCA, imediatamente antes do sinal de apito do árbitro central. Após o sinal de apito, a bola vai em direção à baliza sem que o guarda-redes nº. 1 da equipa BRANCA tenha possibilidade de a agarrar. Como o jogo deve ser retomado?",
        "opcoes": [
            "a) Lançamento livre para a equipa PRETA.",
            "b) Lançamento livre para a equipa BRANCA.",
            "c) Livre de 7 metros para a equipa PRETA.",
            "d) Golo para a equipa PRETA."
        ],
        "correta": 0,
        "regra": 13
    },
    {
        "pergunta": "13.7) O jogador nº. 7 da equipa BRANCA está num contra-ataque. Ele remata à baliza e atinge o guarda-redes nº. 12 da equipa PRETA na cabeça, com a bola, de modo que o guarda-redes nº. 12 da equipa PRETA desmaia. A bola volta para o jogador nº. 9 da equipa BRANCA, que está sozinho junto à linha da área de baliza. O jogador nº. 9 da equipa BRANCA remata a bola em direção à baliza vazia. Pouco antes da bola cruzar a linha de baliza, o árbitro apita e interrompe o jogo. O Guarda-redes nº. 12 da equipa PRETA precisa de ser assistido no campo. Qual a decisão correta?",
        "opcoes": [
            "a) Golo para a equipa BRANCA.",
            "b) Livre de 7 metrospara a equipa BRANCA.",
            "c) Lançamento livre para a equipa BRANCA após o sinal de apito.",
            "d) Time-out.",
            "e) O guarda-redes nº. 12 da equipa PRETA deve deixar o campo e só pode reentrar após o terceiro ataque da sua equipa."
        ],
        "correta": [
            2,
            3
        ],
        "regra": 13
    },
    {
        "pergunta": "13.8) O jogador nº. 9 da equipa PRETA recebe um lançamento livre, mas o jogador nº. 5 da equipa BRANCA ainda está na posse da bola. O jogador nº. 5 da equipa BRANCA dirige-se para um dos árbitros e educadamente dá-lhe a bola. Qual a decisão correta?",
        "opcoes": [
            "a) Exclusão de 2 minutos para o jogador nº. 5 da equipa BRANCA e lançamento livre para a equipa PRETA executado do ponto, onde a bola está agora.",
            "b) Advertência para o jogador nº. 5 da equipa BRANCA e lançamento livre para a equipa PRETA executado a partir do local, onde a bola está agora.",
            "c) Exclusão de 2 minutos para o jogador nº. 5 da equipa BRANCA e lançamento livre para a equipa PRETA, executado a partir do local, onde a falta foi cometida.",
            "d) Advertência para o jogador nº. 5 da equipa BRANCA e lançamento livre para a equipa PRETA executado a partir do local, onde a falta foi cometida."
        ],
        "correta": 2,
        "regra": 13
    },
    {
        "pergunta": "13.9) Substituição irregular do jogador nº. 5 da equipa BRANCA, depois dos árbitros assinalarem um livre de 7 metros para a equipa BRANCA. Qual a decisão correta?",
        "opcoes": [
            "a) Lançamento livre para a equipa PRETA",
            "b) Livre de 7 metros para a equipa BRANCA",
            "c) Exclusão de 2 minutos para o jogador nº. 5 da equipa BRANCA",
            "d) Advertência para o oficial responsável da equipa BRANCA"
        ],
        "correta": [
            1,
            2
        ],
        "regra": 13
    },
    {
        "pergunta": "13.10) Qual das seguintes afirmações sobre o local de execução de um lançamento livre estão corretas?",
        "opcoes": [
            "a) Se a bola não é colocada no chão imediatamente após a decisão de lançamento livre, os adversários estão autorizados a executar o lançamento livre no local onde a bola se encontrava no momento da interrupção do jogo.",
            "b) Depois de uma substituição irregular, o lançamento livre pode ser executado onde a bola se encontrava no momento da interrupção do jogo, em vez de na área de substituição, se isso for vantajoso para a equipa que executa o lançamento.",
            "c) Após assinalado jogo passivo, o lançamento livre é executado sempre no local onde a bola se encontrava, quando o lançamento livre foi assinalado.",
            "d) Num lançamento livre junto da linha central, a tolerância para a execução é aproximadamente a mesma da tolerância de execução aplicada a um lançamento de saída."
        ],
        "correta": [
            1,
            2,
            3
        ],
        "regra": 13
    },
    {
        "pergunta": "13.11) O jogador nº. 11 da equipa PRETA, tem a bola no ataque e tenta contornar o jogador nº. 2 da equipa BRANCA. Por causa de um sinal de apito vindo da área dos espectadores, o jogador nº. 2 da equipa BRANCA pára de defender. O jogador nº. 11 da equipa PRETA então, fica sozinho para rematar. Qual a decisão correta?",
        "opcoes": [
            "a) Livre de 7 metros para a equipa PRETA",
            "b) Time-out; consulta com o cronometrista",
            "c) Lançamento livre para a equipa BRANCA",
            "d) Lançamento livre para a equipa PRETA"
        ],
        "correta": [
            1,
            3
        ],
        "regra": 13
    },
    {
        "pergunta": "13.12) A equipa BRANCA tem a bola na linha de lançamento livre da equipa PRETA. O Oficial A da equipa PRETA, protesta tão fortemente contra uma decisão de árbitro, que os árbitros interrompem o jogo. Qual a decisão correta?",
        "opcoes": [
            "a) Sanção progressiva para o oficial A da equipa PRETA.",
            "b) Lançamento livre para a equipa BRANCA na área da substituição da equipa PRETA.",
            "c) Lançamento livre para a equipa BRANCA na linha de lançamento livre da equipa PRETA."
        ],
        "correta": [
            0,
            2
        ],
        "regra": 13
    },
    {
        "pergunta": "13.13) Advertência para o jogador nº. 6 da equipa PRETA. Ao apitar para a subsequente execução do lançamento livre para a equipa BRANCA, o árbitro central não vê o jogador nº. 11 da equipa BRANCA, que está entre a linha da área de baliza e a linha de lançamento livre. O jogador nº. 11 da equipa BRANCA recebe a bola e tem uma clara hipótese de marcar. O árbitro de baliza observou a situação. Qual a decisão correta?",
        "opcoes": [
            "a) O jogo continua sem interrupção.",
            "b) Repetir o lançamento livre após correção e sinal de apito.",
            "c) O árbitro de baliza decide um lançamento livre para a equipa PRETA.",
            "d) O árbitro de baliza dá uma advertência ao jogador nº. 11 da equipa BRANCA.",
            "e) Time-out."
        ],
        "correta": 1,
        "regra": 13
    },
    {
        "pergunta": "13.14) A equipa BRANCA está na posse da bola. A equipa PRETA toma as suas posições na defesa. O jogador nº. 8 da equipa BRANCA está a correr perto da linha lateral. O jogador nº. 4 da equipa BRANCA passa a bola na direção do jogador nº. 8 da equipa BRANCA. O jogador nº. 8 da equipa BRANCA choca com um fotógrafo, que está a andar entre as bancadas e o campo, pisando a linha lateral. O jogador nº. 8 da equipa BRANCA não apanha a bola e perde o controlo do corpo. Antes dos árbitros interromperem o jogo, a bola passa a linha lateral. Qual é a decisão correta?",
        "opcoes": [
            "a) O jogo é reiniciado com uma reposição de bola em jogo para a equipa PRETA.",
            "b) O jogo é reiniciado com um lançamento livre para a equipa BRANCA.",
            "c) Timeout.",
            "d) Anotação no relatório do jogo em conformidade com os regulamentos da respectiva federação."
        ],
        "correta": [
            1,
            2,
            3
        ],
        "regra": 13
    },
    {
        "pergunta": "13.15) A equipa PRETA está no ataque. Os árbitros dão um lançamento livre para o jogador nº. 2 da equipa PRETA. Antes do jogador nº. 2 da equipa PRETA poder executar o lançamento livre, o jogador nº. 11 da equipa PRETA puxa o jogador nº. 8 da equipa BRANCA para baixo. Qual é a decisão correta?",
        "opcoes": [
            "a) Lançamento livre para a equipa PRETA após o apito.",
            "b) Lançamento livre para a equipa BRANCA após o apito.",
            "c) Time-out.",
            "d) Sanção progressiva para o jogador nº. 11 da equipa PRETA.",
            "e) Exclusão direta de 2 minutos para o jogador nº. 11 da equipa PRETA.",
            "f) Desqualificação para o jogador nº. 11 da equipa PRETA (cartão vermelho mostrado pelos árbitros)."
        ],
        "correta": [
            0,
            2,
            4
        ],
        "regra": 13
    },
    {
        "pergunta": "14.1) O marcador encontra-se em 20-20. O jogador nº. 7 da equipa PRETA intercepta um passe da equipa BRANCA e inicia um contra-ataque, sem que ninguém da equipa BRANCA seja capaz de o parar. Um espectador corre para o campo e puxa para baixo até ao chão o jogador nº. 7 da equipa PRETA, levando a cenas tumultuosas com mais espectadores em campo. O oficial A da equipa PRETA derruba o espectador que parou o jogador nº. 7 da equipa PRETA. Qual a decisão correta?",
        "opcoes": [
            "a) Suspender o jogo permanentemente.",
            "b) Time-out; livre de 7 metros para a equipa PRETA; desqualificação do oficial A da equipa PRETA; reduzir a equipa PRETA em campo em um jogador por 2 minutos; relatório escrito (cartões vermelho e azul mostrados pelos árbitros).",
            "c) Time-out; livre de 7 metros para a equipa PRETA; desqualificação do oficial A da equipa PRETA; reduzir a equipa PRETA em campo em um jogador por 2 minutos; (cartão vermelho mostrado pelos árbitros).",
            "d) Time-out; livre de 7 metros para a equipa PRETA: exclusão de 2 minutos do oficial A da equipa PRETA; reduzir a equipa PRETA em campo em um jogador por 2 minutos."
        ],
        "correta": 1,
        "regra": 14
    },
    {
        "pergunta": "14.2) Lançamento de reposição de bola em jogo para a equipa PRETA. O jogador nº. 7 da equipa PRETA executa o lançamento corretamente e reconhece que o guarda-redes nº. 12 da equipa BRANCA está de pé, longe da sua baliza. O jogador nº. 7 da equipa PRETA remata a bola diretamente na direção da baliza vazia. O jogador nº. 3 da equipa BRANCA entra na área de baliza para parar a bola. Qual a decisão correta?",
        "opcoes": [
            "a) Golo",
            "b) Lançamento livre para a equipa PRETA",
            "c) Livre de 7 metros para a equipa PRETA",
            "d) Sanção progressiva para o jogador nº. 3 da equipa BRANCA",
            "e) Exclusão direta de 2 minutos para o jogador nº.3 da equipa BRANCA."
        ],
        "correta": [
            2,
            4
        ],
        "regra": 14
    },
    {
        "pergunta": "14.3) Ao executar um livre de 7 metros, o jogador nº. 4 da equipa BRANCA, atinge o poste da baliza. A bola ressalta de volta para o jogador nº. 4 da equipa BRANCA, sem tocar em nenhum companheiro ou adversário. Ele remata e marca golo. Qual a decisão correta?",
        "opcoes": [
            "a) Lançamento livre para a equipa PRETA.",
            "b) Lançamento de baliza para a equipa PRETA.",
            "c) Golo para a equipa BRANCA."
        ],
        "correta": 2,
        "regra": 14
    },
    {
        "pergunta": "14.4) O jogador nº. 3 da equipa BRANCA move-se em torno do jogador nº. 4 da equipa PRETA na linha de lançamento livre da equipa PRETA. Depois de dar três passos, ele quer rematar à baliza, mas é empurrado pelo jogador nº. 4 da equipa PRETA. Imediatamente depois de dar um quarto passo, ele marca um golo. Nenhum outro jogador da equipa PRETA teria sido capaz de intervir. Qual a decisão correta?",
        "opcoes": [
            "a) Vantagem e, portanto, golo para a equipa BRANCA",
            "b) Sanção progressiva para o jogador nº. 4 da equipa PRETA",
            "c) Lançamento livre para a equipa BRANCA",
            "d) Livre de 7 metros para a equipa BRANCA"
        ],
        "correta": [
            1,
            3
        ],
        "regra": 14
    },
    {
        "pergunta": "14.5) O jogador nº. 9 da equipa BRANCA, executa um livre de 7 metros, e a bola entra na baliza. No entanto, antes que a bola deixasse a mão do executante, o jogador nº. 4 da equipa BRANCA atravessou a linha de lançamento livre. Qual a decisão correta?",
        "opcoes": [
            "a) Golo para a equipa BRANCA",
            "b) Repetir o livre de 7 metros",
            "c) Lançamento livre para a equipa PRETA",
            "d) Repetir o lançamento e advertência para o jogador nº. 4 da equipa BRANCA"
        ],
        "correta": 2,
        "regra": 14
    },
    {
        "pergunta": "14.6) O jogador nº. 2 da equipa PRETA, prepara-se para executar um livre de 7 metros após o sinal de apito do árbitro. Naquele momento, o jogador nº. 5 da equipa BRANCA atravessa a linha de lançamento livre. Apesar da ação do jogador nº. 5 da equipa BRANCA, o jogador nº. 2 da equipa PRETA marca um golo. Qual a decisão correta?",
        "opcoes": [
            "a) Golo e desqualificação do jogador nº. 5 da equipa BRANCA (cartão vermelho mostrado pelos árbitros).",
            "b) Golo e exclusão de 2 minutos para o jogador nº. 5 da equipa BRANCA.",
            "c) Golo para a equipa PRETA.",
            "d) Repetir o livre de 7 metros e desqualificação do jogador nº. 5 da equipa BRANCA."
        ],
        "correta": 2,
        "regra": 14
    },
    {
        "pergunta": "14.7) O jogador nº. 6 da equipa BRANCA está na posse da bola e pronto para executar um livre de 7 metros, quando o oficial A de equipa PRETA chama o guarda-redes nº. 12 da equipa PRETA para sair e ser substituído. O guarda-redes nº. 12 da equipa PRETA está pronto para seguir esta instrução. Qual a decisão correta?",
        "opcoes": [
            "a) Nenhuma ação",
            "b) Advertência para oficial A da equipa PRETA",
            "c) Advertência para o oficial A da equipa PRETA e para o guarda-redes nº. 12 da equipa PRETA",
            "d) Advertência para o guarda-redes nº. 12 da equipa PRETA"
        ],
        "correta": 3,
        "regra": 14
    },
    {
        "pergunta": "14.8) O jogador nº. 4 da equipa BRANCA efetuou um remate à baliza. A bola atinge o poste da baliza e ressalta em direção à área de jogo. O jogador nº. 6 da equipa BRANCA está sozinho junto à linha da área de baliza e está pronto para apanhar a bola. O jogador nº. 4 da equipa PRETA, claramente entra na área de baliza, a fim de empurrar a bola para fora linha de saída de baliza da sua equipa. Qual a decisão correta?",
        "opcoes": [
            "a) Livre de 7 metros para a equipa BRANCA.",
            "b) Lançamento de reposição de bola em jogo para a equipa BRANCA.",
            "c) Lançamento livre para a equipa BRANCA.",
            "d) Lançamento de baliza para a equipa PRETA."
        ],
        "correta": 0,
        "regra": 14
    },
    {
        "pergunta": "14.9) O jogador nº. 3 da equipa BRANCA está a executar um livre de 7 metros, O jogador nº. 5 da equipa BRANCA atravessa a linha de lançamento livre após o apito do árbitro, mas antes que a bola tenha saído da mão do jogador nº. 3 da equipa BRANCA. Qual a decisão correta?",
        "opcoes": [
            "a) Repetir o livre de 7 metros.",
            "b) Lançamento livre para a equipa PRETA.",
            "c) Lançamento de baliza para a equipa PRETA.",
            "d) Sanção progressiva para o jogador nº. 5 da equipa BRANCA."
        ],
        "correta": 1,
        "regra": 14
    },
    {
        "pergunta": "14.10) O jogador nº. 9 da equipa BRANCA está completamente desmarcado na linha da área de baliza dos adversários, pronto para receber a bola. Isto é notado pelo jogador nº. 10 da equipa BRANCA, que faz um passe em arco através da área de baliza, para servir o jogador nº. 9 da equipa BRANCA. Isto é notado pelo jogador nº. 3 da equipa PRETA, que claramente entra na sua própria área de baliza para parar a bola, ficando com os dois pés dentro da área de baliza. É a segunda vez no jogo que ele toma esta ação. Qual a decisão correta?",
        "opcoes": [
            "a) Lançamento livre para a equipa BRANCA.",
            "b) Livre de 7 metros para a equipa BRANCA.",
            "c) Sanção progressiva para o jogador nº. 3 da equipa PRETA."
        ],
        "correta": [
            1,
            2
        ],
        "regra": 14
    },
    {
        "pergunta": "14.11) O jogador nº. 10 da equipa PRETA bloqueia de forma correta o jogador nº. 2 da equipa BRANCA. Quando o jogador nº. 10 da equipa PRETA se prepara para fazer o seu movimento, o jogador nº. 4 da equipa PRETA executa um passe picado para o espaço aberto, onde o jogador nº. 10 da equipa PRETA poderia ser capaz de chegar. Antes do jogador nº. 10 da equipa PRETA poder receber a bola, ele é travado pelo jogador nº. 2 da equipa BRANCA que agarra a sua camisola. Qual a decisão correta?",
        "opcoes": [
            "a) Lançamento livre para a equipa PRETA.",
            "b) Livre de 7 metros para a equipa PRETA, independentemente das posições dos adversários.",
            "c) Livre de 7 metros para a equipa PRETA, se nenhum jogador da equipa BRANCA poderia legalmente parar o jogador nº. 10 da equipa PRETA.",
            "d) Sanção progressiva para o jogador nº. 2 da equipa BRANCA.",
            "e) Desqualificação obrigatória do jogador nº. 2 da equipa BRANCA (cartão vermelho mostrado pelos árbitros)."
        ],
        "correta": [
            2,
            3
        ],
        "regra": 14
    },
    {
        "pergunta": "14.12) O jogador nº. 3 da equipa BRANCA tem a posse da bola e corre em direção à baliza da equipa PRETA num contra-ataque, o qual resulta numa clara oportunidade de golo. Enquanto BRANCO 3 executa o remate em suspensão, surge um sinal de apito de um espetador que o distrai, de modo que este não remata à baliza. Em vez disso, ele para com a bola na área de baliza. Decisão correta?",
        "opcoes": [
            "a) Lançamento livre para a equipa PRETA após o sinal de apito",
            "b) Livre de 7 metros para a equipa BRANCA",
            "c) Lançamento livre para a equipa BRANCA",
            "d) Lançamento de baliza para a equipa PRETA após o sinal de apito",
            "e) Relatório no boletim de jogo em conformidade com as regras da respetiva federação."
        ],
        "correta": [
            1,
            4
        ],
        "regra": 14
    },
    {
        "pergunta": "14.13) A equipa BRANCA está a executar um contra-ataque, quando o marcador está 26:26. O jogador nº. 5 da equipa BRANCA, prepara-se para fazer um remate, sozinho na linha da área de baliza da equipa PRETA. Nessa altura, há um sinal de apito do cronometrista, que indica, que o jogo acabou. Os árbitros determinam que faltam jogar 20 segundos. Qual a decisão correta?",
        "opcoes": [
            "a) Lançamento livre para a equipa BRANCA na zona da mesa do cronometrista.",
            "b) Livre de 7 metros para a equipa BRANCA.",
            "c) Colocação no relatório de jogo.",
            "d) Lançamento livre para a equipa BRANCA no lugar onde a bola estava, quando o soou o sinal de apito."
        ],
        "correta": [
            1,
            2
        ],
        "regra": 14
    },
    {
        "pergunta": "14.14) Qual das seguintes afirmações sobre a execução de um livre de 7 metros está/estão corretas?",
        "opcoes": [
            "a) Ao jogador que executa o lançamento, é permitido estar até 1 metro atrás da linha de 7 metros.",
            "b) Os árbitros devem dar time-out, se a equipa à defesa estiver a mudar de guarda-redes.",
            "c) Ao guarda-redes será dada uma sanção pessoal, se ele cruzar repetidamente a linha de restrição do guarda-redes.",
            "d) Os jogadores da equipa defensora devem estar sempre a 3 metros do lançador."
        ],
        "correta": 0,
        "regra": 14
    },
    {
        "pergunta": "14.15) O jogador nº. 5 da equipa BRANCA está na posse da bola e salta do canto direito para a área de baliza da equipa PRETA e colide com o jogador nº. 11 da equipa PRETA, que está cerca de 50 centímetros dentro da área de baliza, com os braços levantados. O jogador nº. 11 da equipa PRETA fez isto pela terceira vez no jogo. Qual a decisão correta?",
        "opcoes": [
            "a) Livre de 7 metros para a equipa BRANCA",
            "b) Falta ofensiva contra o jogador nº. 5 da equipa BRANCA",
            "c) Exclusão de 2 minutos para o jogador nº. 11 da equipa PRETA",
            "d) Advertência para o jogador nº. 11 da equipa PRETA"
        ],
        "correta": [
            0,
            2
        ],
        "regra": 14
    },
    {
        "pergunta": "14.16) O jogador nº. 6 da equipa BRANCA está a correr em contra-ataque e tem uma clara oportunidade de golo quando as luzes do pavilhão se apagam. Qual das seguintes instruções está/estão corretas?",
        "opcoes": [
            "a) Os árbitros aguardam o resultado da clara oportunidade de golo.",
            "b) Os árbitros interrompem o jogo imediatamente e fazem time-out.",
            "c) Depois das luzes estarem a funcionar novamente, o jogo é retomado com um lançamento livre para a equipa BRANCA.",
            "d) Depois das luzes estarem a funcionar novamente, o jogo é retomado com um livre de 7 metros para a equipa BRANCA.",
            "e) Relatório escrito no boletim de jogo em conformidade com os regulamentos da respectiva federação."
        ],
        "correta": [
            1,
            3,
            4
        ],
        "regra": 14
    },
    {
        "pergunta": "14.17) Enquanto o jogador nº. 3 da equipa BRANCA está a executar um livre de 7 metros, o jogador nº. 5 da equipa BRANCA transpõe a linha de lançamento livre após o sinal de apito do árbitro, mas antes da bola ter deixado a mão do jogador. O guarda-redes nº. 1 da equipa PRETA defende o remate. Qual a decisão correta?",
        "opcoes": [
            "a) Repetir o livre de 7 metros para a equipa BRANCA",
            "b) Lançamento livre para a equipa PRETA",
            "c) Lançamento de baliza para a equipa PRETA"
        ],
        "correta": 2,
        "regra": 14
    },
    {
        "pergunta": "14.18) O jogador nº. 2 da equipa BRANCA está pronto para executar um livre de 7 metros. O árbitro central apita, e o jogador nº. 2 da equipa BRANCA deixa a bola cair no chão. O jogador nº. 3 da equipa PRETA imediatamente agarra a bola e passa-a para o jogador nº. 2 da equipa PRETA, que marca um golo em contra-ataque. Qual a decisão correta?",
        "opcoes": [
            "a) Golo para a equipa PRETA.",
            "b) Repetição do livre de 7 metros.",
            "c) Lançamento livre para a equipa PRETA.",
            "d) Time-out."
        ],
        "correta": 0,
        "regra": 14
    },
    {
        "pergunta": "14.19) O jogador nº. 6 da equipa BRANCA tem a bola na linha de lançamento livre da equipa PRETA e é derrubado por uma falta imprudente por parte do jogador nº. 5 da equipa PRETA. Ao mesmo tempo, o jogador nº. 8 da equipa PRETA está na sua linha de área de baliza, entre o jogador nº. 6 da equipa BRANCA e a sua baliza. Qual a decisão correta?",
        "opcoes": [
            "a) Lançamento livre para a equipa BRANCA.",
            "b) Desqualificação sem relatório escrito do jogador nº. 5 da equipa PRETA (cartão vermelho mostrado pelos árbitros).",
            "c) Exclusão de 2 minutos para o jogador nº. 5 da equipa PRETA.",
            "d) Livre de 7 metros para a equipa BRANCA."
        ],
        "correta": [
            0,
            1
        ],
        "regra": 14
    },
    {
        "pergunta": "14.20) A equipa BRANCA está no ataque e joga com 7 contra 6 com a baliza vazia. O jogador nº. 8 da equipa PRETA interceta um passe. O jogador nº. 8 da equipa PRETA dribla a bola e, antes que ele consiga ter posição para rematar é atacado pelo jogador nº. 3 da equipa BRANCA, que consegue agarrá-lo por breves instantes. Enquanto isso, o guarda-redes nº. 12 da equipa BRANCA entra na área de baliza novamente após uma substituição regular com o jogador nº. 7 da equipa BRANCA. Qual é a decisão correta?",
        "opcoes": [
            "a) Lançamento livre para a equipa PRETA.",
            "b) Livre de 7 metros para a equipa PRETA.",
            "c) Time-out.",
            "d) Exclusão de 2 minutos para o jogador nº. 3 da equipa BRANCA."
        ],
        "correta": 0,
        "regra": 14
    },
    {
        "pergunta": "14.21) A equipa BRANCA está no ataque e joga com 7 contra 6 com a baliza vazia. O jogador nº. 5 da equipa PRETA intercepta um passe. O jogador nº. 5 da equipa PRETA imediatamente tenta rematar diretamente à baliza vazia. Nesse momento, ele é empurrado por trás pelo jogador nº. 6 da equipa BRANCA, de modo que ele perde parcialmente o controlo do corpo e falha o remate não marcando golo. Qual é a decisão correta?",
        "opcoes": [
            "a) Lançamento livre para a equipa PRETA.",
            "b) Livre de 7 metros para a equipa PRETA.",
            "c) Time-out.",
            "d) Exclusão de 2 minutos para o jogador nº. 6 da equipa BRANCA.",
            "e) Desqualificação para o jogador nº. 6 da equipa BRANCA (cartão vermelho mostrado pelos árbitros)."
        ],
        "correta": [
            1,
            2,
            3
        ],
        "regra": 14
    },
    {
        "pergunta": "14.22) A equipa BRANCA está no ataque e joga com 7 contra 6 com a baliza vazia. O jogador nº. 11 da equipa BRANCA falha um passe e a bola transpõe a linha lateral para uma reposição para a equipa PRETA. O jogador nº. 9 da equipa PRETA pega na bola e executa a reposição como tentativa de remate direto para a baliza vazia. A bola é bloqueada pelo jogador nº. 4 da equipa BRANCA, que está muito perto durante a execução do lançamento de reposição. Qual é a decisão correta?",
        "opcoes": [
            "a) Correção da posição do jogador nº. 4 da equipa BRANCA.",
            "b) Sanção progressiva para o jogador nº. 4 da equipa BRANCA.",
            "c) Repetição da reposição de bola em jogo para a equipa PRETA após o sinal de apito.",
            "d) Lançamento livre para a equipa PRETA.",
            "e) Livre de 7 metros para a equipa PRETA.",
            "f) Exclusão direta de 2 minutos para o jogador nº.4 da equipa BRANCA."
        ],
        "correta": [
            4,
            5
        ],
        "regra": 14
    },
    {
        "pergunta": "14.23) A equipa BRANCA está no ataque e joga com 7 contra 6 com a baliza vazia. Os árbitros apitam para uma falta ofensiva do jogador nº. 7 da equipa BRANCA. O jogador nº. 8 da equipa PRETA ganha a posse da bola e está pronto para executar o lançamento livre como tentativa de rematar a bola à baliza vazia. Enquanto faz isso e antes que a bola tenha saído da sua mão, ele é puxado por trás pelo jogador nº. 7 da equipa BRANCA. Pouco depois, o guarda-redes nº. 16 da equipa BRANCA entra na sua área de baliza após uma substituição correta com o jogador nº. 2 da equipa BRANCA. Qual é a decisão correta?",
        "opcoes": [
            "a) Sanção progressiva para o jogador nº. 7 da equipa BRANCA.",
            "b) Exclusão de 2 minutos para o jogador nº. 7 da equipa BRANCA.",
            "c) Desqualificação para o jogador nº. 7 da equipa BRANCA (cartão vermelho mostrado pelos árbitros).",
            "d) Time-out.",
            "e) Lançamento livre repetido para a equipa PRETA após o apito.",
            "f) Livre de 7 metros para a equipa PRETA."
        ],
        "correta": [
            1,
            3,
            5
        ],
        "regra": 14
    },
    {
        "pergunta": "15.1) Ao realizar um lançamento de baliza, o guarda-redes nº. 13 da equipa BRANCA, movimenta a bola de uma forma, que a bola vai para além da linha de baliza entre os postes. Qual a decisão correta?",
        "opcoes": [
            "a) O jogo continua sem interrupção.",
            "b) Lançamento de baliza para a equipa BRANCA com sinal de apito.",
            "c) Golo para a equipa PRETA.",
            "d) Lançamento livre para a equipa PRETA."
        ],
        "correta": 0,
        "regra": 15
    },
    {
        "pergunta": "15.2) 20 segundos antes do final do jogo, a equipa BRANCA está na liderança por 20-19. O guarda-redes nº. 12 da equipa BRANCA, leva o seu tempo para executar um lançamento de baliza, driblando a bola para trás e para frente na área de baliza. Qual a decisão correta?",
        "opcoes": [
            "a) Time-out",
            "b) Lançamento livre contra a equipa BRANCA.",
            "c) Sinal de apito para o lançamento de baliza.",
            "d) Exclusão de 2 minutos para o guarda-redes nº. 12 da equipa BRANCA.",
            "e) Mostrar o sinal de advertência de jogo passivo."
        ],
        "correta": 2,
        "regra": 15
    },
    {
        "pergunta": "15.3) Os árbitros deram um lançamento livre para a equipa PRETA na linha de lançamento livre da equipa BRANCA. Quando todos os jogadores assumiram as suas posições corretas, o árbitro apitou. Antes da bola deixar a mão do lançador, dois dos seus companheiros de equipa transpõem a linha de lançamento livre da equipa BRANCA. Qual a decisão correta?",
        "opcoes": [
            "a) Repetição do lançamento livre para a equipa PRETA.",
            "b) Lançamento livre para a equipa BRANCA.",
            "c) Com o sinal de reinício.",
            "d) Sem sinal de reinício."
        ],
        "correta": [
            1,
            3
        ],
        "regra": 15
    },
    {
        "pergunta": "15.4) O guarda-redes nº. 12 da equipa BRANCA está de pé na área de baliza com a bola na mão, pronto para executar um lançamento de baliza. O jogador nº. 6 da equipa PRETA toca na bola com a mão aberta e atira-a para longe do guarda-redes nº. 12 da equipa BRANCA. Qual a decisão correta?",
        "opcoes": [
            "a) Lançamento de baliza para a equipa BRANCA.",
            "b) Lançamento livre para a equipa BRANCA.",
            "c) Lançamento de baliza após o sinal de apito.",
            "d) Exclusão de 2 minutos para o jogador nº. 6 da equipa PRETA."
        ],
        "correta": [
            2,
            3
        ],
        "regra": 15
    },
    {
        "pergunta": "15.5) Um lançamento de reposição de bola em jogo é atribuído à equipa BRANCA. O jogador nº. 8 da equipa BRANCA executa o lançamento como um remate direto à baliza. A bola atinge o poste da baliza, ressalta de volta para o jogador nº. 8 da equipa BRANCA, que agarra a bola e marca um golo. Qual a decisão correta?",
        "opcoes": [
            "a) Lançamento de baliza para a equipa PRETA.",
            "b) Golo para a equipa BRANCA.",
            "c) O lançamento de reposição de bola em jogo é repetido após o sinal de apito.",
            "d) Lançamento livre para a equipa PRETA."
        ],
        "correta": 1,
        "regra": 15
    },
    {
        "pergunta": "15.6) O guarda-redes nº. 12 da equipa PRETA defendeu um remate à baliza. Ele quer começar um contra-ataque imediatamente, mas deixa cair a bola, de forma a que esta transpõe a linha de golo e entra na baliza da equipa PRETA. Qual a decisão correta?",
        "opcoes": [
            "a) Golo para a equipa BRANCA.",
            "b) Repetir o lançamento de baliza após o sinal de apito.",
            "c) Reposição de bola em jogo para a equipa BRANCA.",
            "d) Lançamento livre para a equipa BRANCA."
        ],
        "correta": 1,
        "regra": 15
    },
    {
        "pergunta": "15.7) O jogador nº. 6 da equipa BRANCA executa um lançamento de reposição de bola em jogo na direção ao seu guarda-redes. O guarda-redes nº. 1 da equipa BRANCA repara na bola muito tarde e a bola entra na baliza. Qual a decisão correta?",
        "opcoes": [
            "a) Lançamento livre para a equipa PRETA.",
            "b) Golo para a equipa PRETA.",
            "c) Lançamento de baliza para a equipa BRANCA.",
            "d) Repetir o lançamento de reposição de bola em jogo para a equipa BRANCA após o sinal de apito."
        ],
        "correta": 1,
        "regra": 15
    },
    {
        "pergunta": "15.8) Lançamento de reposição em jogo para a equipa BRANCA. O jogador nº. 7 da equipa BRANCA executa o lançamento e a bola atinge o árbitro. O jogador nº. 7 da equipa BRANCA apanha a bola outra vez, remata à baliza e marca golo. Qual a decisão correta?",
        "opcoes": [
            "a) Lançamento de baliza para a equipa PRETA",
            "b) Golo para a equipa BRANCA.",
            "c) Lançamento livre para a equipa PRETA.",
            "d) Repetição do lançamento de reposição de bola em jogo após o sinal de apito.",
            "e) Lançamento livre para a equipa BRANCA."
        ],
        "correta": 2,
        "regra": 15
    },
    {
        "pergunta": "15.9) Lançamento livre para a equipa BRANCA. Quando todos estão posicionados corretamente, o jogador nº. 10 da equipa BRANCA pousa a bola no chão para dar algumas instruções. O jogador nº. 7 da equipa PRETA, rapidamente aproveita a situação, pega na bola e começa um contra-ataque. Qual a decisão correta?",
        "opcoes": [
            "a) O jogo continua sem interrupção.",
            "b) Repetir o lançamento livre para a equipa BRANCA após o sinal de apito.",
            "c) Lançamento livre para a equipa BRANCA, advertência para o jogador nº. 7 da equipa PRETA.",
            "d) Lançamento livre para a equipa BRANCA, exclusão de 2 minutos para o jogador nº. 7 da equipa PRETA."
        ],
        "correta": 0,
        "regra": 15
    },
    {
        "pergunta": "15.10) O jogador nº. 9 da equipa PRETA quer executar um lançamento livre, mas o jogador nº. 11 da equipa BRANCA está só a 2 metros da bola, e tenta atrasar o lançamento. Qual a decisão correta?",
        "opcoes": [
            "a) Sanção pessoal contra o jogador nº. 11 da equipa BRANCA, lançamento livre para a equipa PRETA após o sinal de apito.",
            "b) Lançamento livre para a equipa BRANCA após o sinal de apito.",
            "c) Exclusão de 2 minutos para o jogador nº. 11 da equipa BRANCA.",
            "d) Corrigir a posição do jogador nº. 11 da equipa BRANCA e lançamento livre após o sinal de apito."
        ],
        "correta": 0,
        "regra": 15
    },
    {
        "pergunta": "15.11) Lançamento livre para a equipa PRETA na linha de lançamento livre da equipa BRANCA. O árbitro verifica que o jogador nº. 8 da equipa PRETA está numa posição entre a linha de lançamento livre e a linha de área de baliza. O jogador nº. 8 da equipa PRETA, recebe a bola e marca golo. Qual a decisão correta?",
        "opcoes": [
            "a) Repetir o lançamento livre para a equipa PRETA após o sinal de apito.",
            "b) Lançamento livre para a equipa BRANCA.",
            "c) Golo para a equipa PRETA.",
            "d) Advertência para o jogador nº. 8 da equipa PRETA."
        ],
        "correta": 0,
        "regra": 15
    },
    {
        "pergunta": "15.12) O guarda-redes nº. 12 da equipa PRETA executa um lançamento de baliza e marca golo equipa BRANCA. Nenhum jogador de qualquer equipa toca na bola, e ela entra na baliza da equipa BRANCA. Qual a decisão correta?",
        "opcoes": [
            "a) Lançamento de baliza para a equipa BRANCA.",
            "b) Lançamento de reposição de bola em jogo para a equipa BRANCA.",
            "c) Golo para a equipa PRETA.",
            "d) Advertência para o guarda-redes nº. 12 da equipa PRETA por conduta antidesportiva."
        ],
        "correta": 2,
        "regra": 15
    },
    {
        "pergunta": "15.13) O jogador nº. 5 da equipa BRANCA, já recebeu uma advertência e duas suspensões de 2 minutos. Quando a equipa PRETA está a realizar um lançamento livre, ele interfere com a execução do mesmo por não manter a distância necessária do local do lançamento. É a primeira vez que ele faz isto. Qual a decisão correta?",
        "opcoes": [
            "a) Advertência para o jogador nº. 5 da equipa BRANCA",
            "b) Nenhuma sanção",
            "c) Terceira exclusão de 2 minutos para o jogador nº. 5 da equipa BRANCA e desqualificação (cartão vermelho mostrado pelos árbitros)"
        ],
        "correta": 2,
        "regra": 15
    },
    {
        "pergunta": "15.14) Pouco antes do final do jogo o marcador é 24-23 a favor da equipa BRANCA. Um lançamento livre é concedido para a equipa BRANCA, a cerca de 1 metro da linha de lançamento livre da equipa PRETA. Todos os jogadores tomam uma posição correta e o árbitro apita para a execução do lançamento livre. O jogador nº. 10 da equipa BRANCA, que está a executar o lançamento livre, dá um passo, antes da bola deixar a sua mão.  Qual a decisão correta?",
        "opcoes": [
            "a) Lançamento livre para a equipa BRANCA",
            "b) Time-out",
            "c) Exclusão de 2 minutos para o jogador nº. 10 da equipa BRANCA",
            "d) Lançamento livre para a equipa PRETA"
        ],
        "correta": 3,
        "regra": 15
    },
    {
        "pergunta": "15.15) O jogador nº. 14 da equipa BRANCA quer executar um lançamento livre sem o  sinal de apito na linha de lançamento livre da equipa PRETA. Ele e os seus companheiros de equipa, estão em posição correta. Antes da bola deixar a mão do jogador nº. 14 da equipa BRANCA, o jogador nº. 13 da equipa BRANCA e o jogador nº. 15 da equipa BRANCA, correm transpondo a linha de lance livre em direção à linha da área de baliza. Qual a decisão correta?",
        "opcoes": [
            "a) Correção.",
            "b) Lançamento livre para a equipa BRANCA após o sinal de apito.",
            "c) O jogo continua sem interrupção.",
            "d) Lançamento livre para a equipa PRETA."
        ],
        "correta": [
            0,
            1
        ],
        "regra": 15
    },
    {
        "pergunta": "15.16) O guarda-redes nº. 1 da equipa PRETA, está a executar um lançamento de baliza. A bola toca no árbitro e volta para o guarda-redes nº. 1 da equipa PRETA, que, entretanto, saiu da área de baliza. Qual a decisão correta?",
        "opcoes": [
            "a) O jogo continua sem interrupção.",
            "b) Repetir o lançamento de baliza após o sinal de apito.",
            "c) Lançamento livre para a equipa BRANCA.",
            "d) Lançamento livre para a equipa PRETA após o sinal de apito."
        ],
        "correta": 2,
        "regra": 15
    },
    {
        "pergunta": "15.17) Ao executar um lançamento livre, o jogador nº. 11 da equipa PRETA balança para trás o braço e move a bola completamente para fora da linha lateral. Qual a decisão correta?",
        "opcoes": [
            "a) O jogo continua sem interrupção.",
            "b) Lançamento livre para a equipa BRANCA.",
            "c) Lançamento de reposição de bola em jogo para a equipa BRANCA.",
            "d) Lançamento livre para a equipa BRANCA. O jogador nº. 11 da equipa PRETA recebe um aviso verbal."
        ],
        "correta": 0,
        "regra": 15
    },
    {
        "pergunta": "15.18) O guarda-redes nº. 1 da equipa BRANCA defende a bola mesmo na frente da linha de baliza. Quando ele tenta passar a bola para o jogador nº. 4 da equipa BRANCA, a bola cai da sua mão e entra na sua baliza. Qual a decisão correta?",
        "opcoes": [
            "a) Golo para a equipa PRETA",
            "b) Lançamento livre para a equipa PRETA",
            "c) Livre de 7 metros para a equipa PRETA",
            "d) Repetição do lançamento de baliza para a equipa BRANCA, após sinal de apito"
        ],
        "correta": 3,
        "regra": 15
    },
    {
        "pergunta": "15.19) A equipa BRANCA tem um lançamento de saída. O árbitro central apita para a execução. Agora, o jogador nº. 13 da equipa BRANCA rouba a bola da mão do jogador nº. 9 da equipa BRANCA, que estava pronto para executar o lançamento, porque o jogador nº. 13 da equipa BRANCA vê que, o jogador nº. 7 da equipa BRANCA e jogador nº. 3 da equipa BRANCA, estão a correr para a baliza do adversário e estão em posições favoráveis. O jogador nº. 13 da equipa BRANCA, joga a bola para o jogador nº. 7 da equipa BRANCA, que marca um golo. Qual a decisão correta?",
        "opcoes": [
            "a) Golo para a equipa BRANCA.",
            "b) Correção, repetição do lançamento de saída para a equipa BRANCA.",
            "c) Lançamento livre para a equipa PRETA.",
            "d) Aviso verbal para o jogador nº. 13 da equipa BRANCA.",
            "e) Aviso verbal para jogador nº. 7 da equipa BRANCA e para o jogador nº. 13 da equipa BRANCA."
        ],
        "correta": 2,
        "regra": 15
    },
    {
        "pergunta": "15.20) (Sem área de lançamento de saída) - O resultado no jogo é 30-30 a 4 segundos do fim do jogo. A equipa BRANCA marca e passa a liderar por 31-30. A equipa PRETA quer executar o lançamento de saída rapidamente. O jogador nº. 10 da equipa PRETA está com um pé atrás da linha central e o outro na frente dela. Sem um sinal de apito ele atira a bola, que acaba por entrar na baliza da equipa BRANCA. O sinal automático do relógio publico soa para o final do jogo. Qual a decisão correta?",
        "opcoes": [
            "a) Golo para a equipa PRETA.",
            "b) Repetição do lançamento de saída para a equipa PRETA.",
            "c) Aguardar o resultado do lançamento.",
            "d) Time-out.",
            "e) O jogo acabou; não é golo."
        ],
        "correta": 4,
        "regra": 15
    },
    {
        "pergunta": "15.21) Lançamento livre para a equipa BRANCA na linha de lançamento livre da equipa PRETA. O jogador nº. 7 da equipa BRANCA executa o lançamento livre e tal como os seus companheiros de equipa, ele está corretamente posicionado fora da linha de lançamento livre. O lançamento livre é executado rapidamente sem um sinal de apito, mas antes da bola deixar a mão do jogador nº. 7 da equipa BRANCA, o jogador nº. 9 da equipa BRANCA e o jogador nº. 18 da equipa BRANCA transpôem a linha de lançamento livre. Qual a decisão correta?",
        "opcoes": [
            "a) Lançamento livre para a equipa PRETA.",
            "b) Correção.",
            "c) Lançamento livre para a equipa BRANCA após o sinal de apito.",
            "d) Lançamento livre para a equipa PRETA; advertência para os jogadores nº. 9 e jogador nº.18 da equipa BRANCA."
        ],
        "correta": [
            1,
            2
        ],
        "regra": 15
    },
    {
        "pergunta": "15.22) Através de quais dos seguintes lançamentos, não é possível marcar um golo na própria baliza?",
        "opcoes": [
            "a) Lançamento de baliza.",
            "b) Lançamento livre.",
            "c) Lançamento de reposição de bola em jogo.",
            "d) Lançamento de saída."
        ],
        "correta": 0,
        "regra": 15
    },
    {
        "pergunta": "15.23) O jogador nº. 4 da equipa PRETA, assume uma posição correta para executar um lançamento de reposição de bola em jogo que foi atribuído à sua equipa. Como ele não encontra um companheiro de equipa a quem possa passar a bola, ele dribla a bola uma vez sobre da linha lateral. Qual a decisão correta?",
        "opcoes": [
            "a) Lançamento livre para a equipa BRANCA sem sinal de apito.",
            "b) Reposição de bola em jogo para a equipa BRANCA após o sinal de reinício.",
            "c) Repetição do lançamento de reposição de bola em jogo para a equipa PRETA após o sinal de apito.",
            "d) Lançamento livre para a equipa PRETA após o sinal de apito."
        ],
        "correta": 0,
        "regra": 15
    },
    {
        "pergunta": "15.24) A equipa BRANCA recebe um lançamento livre. O jogador nº. 9 da equipa BRANCA executa o livre muito rapidamente enquanto salta, isto sem o sinal de apito dos árbitros. A bola vai para o jogador nº. 4 da equipa BRANCA, que se encontra completamente sozinho na frente da baliza da equipa PRETA. Qual a decisão correta?",
        "opcoes": [
            "a) O jogo continua sem interrupção",
            "b) Lançamento livre para a equipa PRETA",
            "c) Repetição do lançamento livre para a equipa BRANCA após o sinal de apito"
        ],
        "correta": 2,
        "regra": 15
    },
    {
        "pergunta": "15.25) A equipa BRANCA recebe um lançamento livre. O jogador nº. 5 da equipa BRANCA executa muito rapidamente o lançamento livre sem o sinal de apito dos árbitros. O Jogador nº. 5 da equipa BRANCA pretende jogar a bola para o jogador nº. 4 da equipa BRANCA, mas o jogador nº. 3 da equipa PRETA, intercepta a bola e fica sozinho na frente da baliza da equipa BRANCA. Qual a decisão correta?",
        "opcoes": [
            "a) O jogo continua sem interrupção",
            "b) Repetição do lançamento livre após o sinal de apito",
            "c) Repetição do lançamento livre e sanção progressiva para o jogador nº. 3 da equipa PRETA."
        ],
        "correta": 0,
        "regra": 15
    },
    {
        "pergunta": "15.26) A equipa PRETA está pronta para executar um lançamento livre sem sinal de apito dos árbitros. O jogador nº. 8 da equipa PRETA executa o lançamento com os dois pés e a mão esquerda em contacto com o solo. O Jogador nº. 6 da equipa PRETA recebe a bola e marca um golo. Qual é a decisão correta?",
        "opcoes": [
            "a) Golo para a equipa PRETA.",
            "b) Correção, repetição do lance livre após apito dos árbitros.",
            "c) Lançamento livre para a equipa BRANCA."
        ],
        "correta": 1,
        "regra": 15
    },
    {
        "pergunta": "16.1) O oficial B da equipa BRANCA está a reclamar e recebe uma exclusão de 2 minutos. Antes do jogo ser retomado, ele reclama novamente e, portanto, é desqualificado. Qual a decisão correta?",
        "opcoes": [
            "a) A equipa BRANCA é reduzida em 2 jogadores em campo por 2 minutos.",
            "b) A equipa BRANCA é reduzida em 1 jogador em campo por 4 minutos.",
            "c) A equipa BRANCA é reduzida em 1 jogador em campo por 2 minutos."
        ],
        "correta": 2,
        "regra": 16
    },
    {
        "pergunta": "16.2) O jogador nº. 8 da equipa BRANCA recebe uma exclusão de 2 minutos porque empurrou um adversário. Ele aproxima-se do árbitro para insultá-lo com as seguintes palavras: «Tu és estúpido, tu és idiota, tu nunca vais aprender!» Antes de sair do campo ele cospe na cara do árbitro. Qual a decisão correta?",
        "opcoes": [
            "a) Desqualificação do jogador nº. 8 da equipa BRANCA, a equipa BRANCA é reduzida por um jogador em campo por 2 minutos (cartão vermelho mostrado pelos árbitros).",
            "b) Desqualificação do jogador nº. 8 da equipa BRANCA, a equipa BRANCA é reduzida por dois jogadores no campo por 2 minutos (cartão vermelho mostrado pelos árbitros).",
            "c) Desqualificação do jogador nº. 8 da equipa BRANCA, a equipa BRANCA é reduzida por um jogador em campo por 4 minutos, relatório escrito (cartões vermelho e azul mostrados pelos árbitros).",
            "d) Desqualificação do jogador nº. 8 da equipa BRANCA, a equipa BRANCA é reduzida por dois jogadores em campo por 2 minutos, relatório escrito (cartões vermelho e azul mostrados pelos árbitros)."
        ],
        "correta": 2,
        "regra": 16
    },
    {
        "pergunta": "16.3) Qual o número máximo de advertências, (cartão amarelo), que podem ser mostradas aos oficiais de uma equipa durante o jogo?",
        "opcoes": [
            "a) Nenhum",
            "b) 1",
            "c)  2",
            "d) 3"
        ],
        "correta": 1,
        "regra": 16
    },
    {
        "pergunta": "16.4) Quando começa a contagem do tempo de exclusão de um jogador?",
        "opcoes": [
            "a) Quando o árbitro mostra o sinal manual para a exclusão.",
            "b) Quando o jogador suspenso cruza a linha lateral.",
            "c) Quando o árbitro apita para o jogo ser retomado.",
            "d) Quando o cronometrista inicia o cronómetro."
        ],
        "correta": 2,
        "regra": 16
    },
    {
        "pergunta": "16.5) A quem devem as suspensões ser indicadas/registadas?",
        "opcoes": [
            "a) Ao jogador suspenso e ao cronometrista/secretário.",
            "b) Ao oficial responsável da equipa e ao cronometrista.",
            "c) Ao cronometrista/secretário.",
            "d) Ao jogador suspenso, ao oficial da equipa responsável e ao cronometrista."
        ],
        "correta": 0,
        "regra": 16
    },
    {
        "pergunta": "16.6) O jogador nº. 5 da equipa PRETA no início do jogo recebe duas suspensões de 2 minutos. Uma exclusão por falta que foi punida progressivamente, e outra por jogar a bola para longe quando os árbitros assinalaram um lançamento livre para os adversários. Agora ele comete a segunda substituição irregular da sua equipa, e antes do jogo ser retomado ele comete uma conduta extremamente antidesportiva. Qual a decisão correta?",
        "opcoes": [
            "a) Exclusão de 2 minutos para o jogador nº. 5 da equipa PRETA.",
            "b) Desqualificação para o jogador nº. 5 da equipa PRETA, relatório escrito (cartões vermelho e azul mostrados pelos árbitros; A equipa PRETA é reduzida com um jogador em campo por 4 minutos.",
            "c) Desqualificação para o jogador nº. 5 da equipa PRETA, relatório escrito (cartões vermelho e azul mostrados pelos árbitros); A equipa PRETA é reduzida com dois jogadores em campo por 2 minutos."
        ],
        "correta": [
            0,
            1
        ],
        "regra": 16
    },
    {
        "pergunta": "16.7) O jogador nº. 5 da equipa BRANCA recebe uma exclusão de 2 minutos por ter cometido uma falta. Ao deixar o campo ele insulta os árbitros e é desqualificado. O jogador nº. 5 da equipa BRANCA fica tão transtornado que agride um dos árbitros. Qual a decisão correta?",
        "opcoes": [
            "a) Relatório escrito (cartão azul mostrado pelos árbitros).",
            "b) Equipa BRANCA fica reduzida por um jogador em campo por 2 minutos.",
            "c) Equipa BRANCA fica reduzida de dois jogadores em campo por 2 minutos.",
            "d) Equipa BRANCA fica reduzida de um jogador em campo por 4 minutos."
        ],
        "correta": [
            0,
            3
        ],
        "regra": 16
    },
    {
        "pergunta": "16.8) O jogador nº. 7 da equipa BRANCA acaba de ser suspenso por 2 minutos por uma atitude antidesportiva. Antes do jogo ser retomado ele diz ao árbitro: «Tu deves ser cego, seu idiota!». Qual a decisão correta?",
        "opcoes": [
            "a) Outra exclusão de 2 minutos para o jogador nº. 7 da equipa BRANCA",
            "b) Desqualificação sem relatório escrito do jogador nº. 7 da equipa BRANCA (cartão vermelho mostrado pelos árbitros).",
            "c) A equipa BRANCA é reduzida de dois jogadores em campo por 2 minutos.",
            "d) A equipa BRANCA é reduzida de um jogador em campo por 4 minutos.",
            "e) Desqualificação do jogador nº. 7 da equipa BRANCA, relatório escrito (cartões vermelho e azul mostrados pelos árbitros)."
        ],
        "correta": [
            3,
            4
        ],
        "regra": 16
    },
    {
        "pergunta": "16.9) O jogador nº. 3 da equipa BRANCA foi excluído por 2 minutos. Depois de deixar o campo, mas antes do retomar o jogo, o jogador nº. 3 da equipa BRANCA é culpado de conduta antidesportiva grave na área de substituição contra o oficial B da equipa PRETA. Antes disso, o Oficial B da equipa PRETA tinha corrido para dentro do campo mesmo sem lhe ter sido dada permissão. Nenhuma sanção tinha sido ainda aplicada contra os oficiais da equipa PRETA. Qual a decisão correta?",
        "opcoes": [
            "a) Desqualificação sem relatório escrito do jogador nº. 3 da equipa BRANCA (cartão vermelho mostrado pelos árbitros).",
            "b) Advertência para o oficial B da equipa PRETA.",
            "c) A equipa BRANCA é reduzida em dois jogadores em campo por 2 minutos.",
            "d) A equipa BRANCA é reduzida em um jogador em campo por 4 minutos."
        ],
        "correta": [
            0,
            1,
            3
        ],
        "regra": 16
    },
    {
        "pergunta": "16.10) Quando um jogador é desqualificado, a equipa é reduzida em um jogador de campo por 2 minutos, exceto se a desqualificação for dada por:",
        "opcoes": [
            "a) Conduta antidesportiva grave durante o intervalo.",
            "b) Uma infração cometida fora do terreno de jogo.",
            "c) Uma infração cometida antes do jogo começar.",
            "d) Por insultar os árbitros."
        ],
        "correta": 2,
        "regra": 16
    },
    {
        "pergunta": "16.11) Durante o intervalo, o jogador nº. 7 da equipa BRANCA agride o guarda-redes nº. 12 da equipa PRETA, enquanto ainda estão em campo. Qual a decisão correta?",
        "opcoes": [
            "a) Desqualificação do jogador nº. 7 da equipa BRANCA, relatório escrito (cartões vermelho e azul mostrados pelos árbitros) a equipa BRANCA é reduzida por um jogador no campo por 2 minutos no início da segunda parte.",
            "b) Advertência para o jogador nº. 7 da equipa BRANCA.",
            "c) Advertência para o jogador nº. 7 da equipa BRANCA, porque o jogo estava interrompido."
        ],
        "correta": 0,
        "regra": 16
    },
    {
        "pergunta": "16.12) Durante o intervalo o árbitro é insultado pelo jogador nº. 7 da equipa PRETA no caminho para os balneários. Qual a decisão correta?",
        "opcoes": [
            "a) Desqualificação sem relatório escrito do jogador nº. 7 da equipa PRETA (cartão vermelho mostrado pelos árbitros).",
            "b) Exclusão de 2 minutos para o jogador nº. 7 da equipa PRETA.",
            "c) A Equipa PRETA é reduzida por um jogador em campo por 2 minutos no início da segunda parte.",
            "d) Desqualificação do jogador nº. 7 da equipa PRETA, relatório escrito (cartões vermelho e azul mostrados pelos árbitros)."
        ],
        "correta": [
            2,
            3
        ],
        "regra": 16
    },
    {
        "pergunta": "16.13) Após o apito para o intervalo, o jogador nº. 5 da equipa PRETA colide com o jogador nº. 9 da equipa BRANCA em campo e estes começam a gritar um com o outro. O jogador nº. 9 da equipa BRANCA empurra o jogador nº. 5 da equipa PRETA no peito, com ambas as mãos, de modo que o jogador nº. 5 da equipa PRETA quase perde o controlo do corpo. Qual a decisão correta?",
        "opcoes": [
            "a) Exclusão de 2 minutos para o jogador nº. 9 da equipa BRANCA no início da segunda parte.",
            "b) Desqualificação sem relatório escrito do jogador nº. 9 da equipa BRANCA (cartão vermelho mostrado pelos árbitros). A equipa BRANCA será reduzida de um jogador em campo por 2 minutos a partir do início da segunda parte.",
            "c) Desqualificação do jogador nº. 9 da equipa BRANCA. A equipa BRANCA começa a segunda parte sem redução.",
            "d) Desqualificação do jogador nº. 9 da equipa BRANCA, relatório escrito (cartões vermelho e azul mostrados pelos árbitros). A equipa BRANCA será reduzida de um jogador em campo por 2 minutos a partir do início da segunda parte."
        ],
        "correta": 1,
        "regra": 16
    },
    {
        "pergunta": "16.14) Após o jogo o jogador nº. 10 da equipa BRANCA grita para os árbitros: «vocês roubaram-nos o jogo, seus idiotas!». Qual a decisão correta?",
        "opcoes": [
            "a) Advertência para o jogador nº. 10 da equipa BRANCA.",
            "b) Desqualificação do jogador nº. 10 da equipa BRANCA, relatório escrito (cartões vermelho e azul mostrados pelos árbitros).",
            "c) Relatório escrito.",
            "d) Advertência para o jogador nº. 10 da equipa BRANCA, relatório escrito."
        ],
        "correta": 2,
        "regra": 16
    },
    {
        "pergunta": "16.15) No terreno de jogo, durante o intervalo, o jogador nº. 9 da equipa BRANCA comete uma agressão contra o oficial B da equipa PRETA que posteriormente insulta o Jogador nº. 9 da equipa BRANCA. Qual a decisão correta?",
        "opcoes": [
            "a) Desqualificação do Jogador nº. 9 da equipa BRANCA, relatório escrito (cartões vermelho e azul mostrados pelos árbitros), a equipa BRANCA será reduzida em um jogador em campo por 2 minutos a partir do início da segunda parte.",
            "b) Desqualificação do oficial B da equipa PRETA, relatório escrito (cartões vermelho e azul mostrados pelos árbitros), a equipa PRETA será reduzida em um jogador em campo por 2 minutos a partir do início da segunda parte.",
            "c) Desqualificação do jogador nº. 9 da equipa BRANCA (cartão vermelho mostrado pelos árbitros), a equipa BRANCA não será reduzida a partir do início da segunda parte.",
            "d) Desqualificação do oficial B da equipa PRETA (cartão vermelho mostrado pelos árbitros), a equipa PRETA não será reduzida a partir do início da segunda parte."
        ],
        "correta": [
            0,
            1
        ],
        "regra": 16
    },
    {
        "pergunta": "16.16) O jogador nº. 7 da equipa BRANCA é desqualificado porque acabou de receber a sua terceira exclusão de 2 minutos. Ele tenta discutir com os árbitros e não sai de campo. Qual a decisão correta?",
        "opcoes": [
            "a) Nenhuma outra ação.",
            "b) A Equipa BRANCA é reduzida com um jogador em campo por 4 minutos.",
            "c) A Equipa BRANCA é reduzida com dois jogadores em campo por 2 minutos."
        ],
        "correta": 1,
        "regra": 16
    },
    {
        "pergunta": "16.17) O jogador nº. 11 da equipa BRANCA recebeu uma advertência na primeira parte e é novamente culpado de conduta antidesportiva durante o intervalo. A equipa BRANCA estava a jogar sem redução de jogadores em campo quando a primeira parte terminou. Qual a decisão correta?",
        "opcoes": [
            "a) Advertência para o jogador nº. 11 da equipa BRANCA.",
            "b) Exclusão de 2 minutos para o jogador nº. 11 da equipa BRANCA.",
            "c) Desqualificação do jogador nº. 11 da equipa BRANCA.",
            "d) A equipa BRANCA será reduzida de um jogador em campo por 2 minutos a partir do início da segunda parte.",
            "e) A equipa BRANCA não será reduzida de jogadores em campo desde o início da segunda parte."
        ],
        "correta": [
            1,
            3
        ],
        "regra": 16
    },
    {
        "pergunta": "16.18) O jogador nº. 4 da equipa BRANCA está lesionado. Os árbitros apitam para um time-out e fazem o sinal de manual para permitir que entrem os elementos da equipa BRANCA em campo para assistir o jogador. O Oficial A e B da equipa BRANCA e também o oficial A da equipa PRETA, entram no campo. O Oficial A da equipa PRETA já recebeu uma advertência. Qual a decisão correta?",
        "opcoes": [
            "a) Nenhuma intervenção.",
            "b) A equipa PRETA continua sem redução do número de jogadores em campo quando o jogo for retomado.",
            "c) Exclusão de 2 minutos para oficial A da equipa PRETA.",
            "d) Desqualificação do oficial A da equipa PRETA (cartão vermelho mostrado pelos árbitros).",
            "e) A equipa PRETA será reduzida por um jogador em campo por 2 minutos quando o jogo for retomado.",
            "f) Depois de receber assistência médica em campo, o jogador nº. 4 da equipa BRANCA deve deixar o campo e só pode reentrar após o terceiro ataque da sua equipa."
        ],
        "correta": [
            2,
            4,
            5
        ],
        "regra": 16
    },
    {
        "pergunta": "16.19) O Jogador nº. 9 da equipa PRETA recebe uma desqualificação por causa de uma falta grave contra o jogador nº. 9 da equipa BRANCA. Antes do jogo ser retomado, o jogador nº. 9 da equipa PRETA atinge na face o oficial A da equipa BRANCA. Qual a decisão correta?",
        "opcoes": [
            "a) Desqualificação sem relatório escrito do jogador nº. 9 da equipa PRETA (cartão vermelho mostrado pelos árbitros), a equipa PRETA será reduzida por dois jogadores no campo por 2 minutos.",
            "b) Desqualificação sem relatório escrito do jogador nº. 9 da equipa PRETA (cartão vermelho mostrado pelos árbitros), a equipa PRETA será reduzida por um jogador no campo por 4 minutos.",
            "c) Nenhuma sanção adicional possível.",
            "d) Desqualificação do Jogador nº. 9 da equipa PRETA, relatório escrito (cartões vermelho e azul mostrados pelos árbitros), a equipa PRETA será reduzida por dois jogadores no campo por 2 minutos.",
            "e) Desqualificação do Jogador nº. 9 da equipa PRETA, relatório escrito (cartões vermelho e azul mostrados pelos árbitros), a equipa PRETA será reduzida por um jogador no campo por 4 minutos."
        ],
        "correta": 4,
        "regra": 16
    },
    {
        "pergunta": "16.20) O Jogador nº. 8 da equipa PRETA recebe a sua primeira exclusão de 2 minutos seguindo-se um time-out. Quando deixa o campo, antes do jogo ser retomado, ele dirige-se aos árbitros de forma antidesportiva. Qual a decisão correta?",
        "opcoes": [
            "a) Uma exclusão adicional de 2 minutos para o jogador nº. 8 da equipa PRETA. A equipa PRETA será reduzida em dois jogadores em campo por 2 minutos.",
            "b) Uma exclusão adicional de 2 minutos para o jogador nº. 8 da equipa PRETA. A equipa PRETA será reduzida em um jogador em campo por 4 minutos.",
            "c) Desqualificação do jogador nº. 8 da equipa PRETA (cartão vermelho mostrado pelos árbitros). A equipa PRETA será reduzida em dois jogadores em campo por 2 minutos.",
            "d) Desqualificação do jogador nº. 8 da equipa PRETA (cartão vermelho mostrado pelos árbitros). A equipa PRETA será reduzida em um jogador em campo por 4 minutos."
        ],
        "correta": 1,
        "regra": 16
    },
    {
        "pergunta": "16.21) Em qual das seguintes situações deve uma equipa ser reduzida de um jogador em campo por 4 minutos?",
        "opcoes": [
            "a) Um jogador acaba de ser desqualificado; ao deixar o campo, ele protesta de uma forma que justifica uma exclusão de 2 minutos.",
            "b) Um jogador acaba de receber uma exclusão de 2 minutos e ao deixar o campo ele insulta os árbitros e é desqualificado.",
            "c) Um jogador acaba de receber uma exclusão de 2 minutos por conduta antidesportiva para com um adversário. Enquanto ele ainda está em campo ele atinge um adversário na cara e é desqualificado.",
            "d) Um jogador acaba de receber uma exclusão de 2 minutos por conduta antidesportiva; Depois de cruzar a linha lateral ele volta para o campo a protestar e é-lhe dada uma exclusão adicional de 2 minutos.",
            "e) Um jogador acaba de ser desqualificado por cuspir num adversário. Quando ele está a sair do campo, empurra um árbitro.",
            "f) Um jogador acaba de ser desqualificado por uma falta grave; Depois de deixar o campo e após o jogo ser retomado, ele insulta os árbitros enquanto está sentado na área de espectadores."
        ],
        "correta": [
            0,
            1,
            2,
            3,
            4
        ],
        "regra": 16
    },
    {
        "pergunta": "16.22) O jogador nº. 5 da equipa BRANCA recebe uma exclusão de 2 minutos ao minuto 7 de jogo. Ele reclama antes do jogo ser retomado e recebe uma exclusão adicional de 2 minutos. Exatamente um minuto depois ele corre para o campo e o cronometrista apita. Em consequência da exclusão adicional por entrar no campo, é desqualificado. Por essa razão ele insulta os árbitros. Qual a decisão correta?",
        "opcoes": [
            "a) A equipa BRANCA será reduzida em um jogador em campo do minuto 07:00 a 08:00, em dois jogadores em campo do minuto 08:00 a 10:00 e em um jogador em campo do minuto 10:00 a 11:00.",
            "b) A equipa BRANCA será reduzida em um jogador em campo do minuto 07:00 a 08:00, em dois jogadores em campo do minuto 08:00 a 11:00 e em um jogador em campo do minuto 11:00 a 12:00.",
            "c) A equipa BRANCA será reduzida em dois jogadores em campo do minuto 07:00 a 08:00, em três jogadores em campo do minuto 08:00 a 10:00 e em dois jogadores em campo do minuto 10:00 a 11:00.",
            "d) A equipa BRANCA será reduzida em 2 jogadores em campo do minuto 07:00 a 08:00, em quatro jogadores em campo do minuto 08:00 a 10:00 e em 2 jogadores em campo do minuto 10:00 a 11:00.",
            "e) Desqualificação do jogador nº. 5 da equipa BRANCA, relatório escrito (cartões vermelho e azul mostrados pelos árbitros)."
        ],
        "correta": [
            1,
            4
        ],
        "regra": 16
    },
    {
        "pergunta": "16.23) O oficial C da equipa BRANCA recebe uma advertência no primeiro tempo por conduta antidesportiva. O tempo de jogo é 35:50 e o oficial B da equipa BRANCA, com gestos vigorosos, mostra que não concorda com uma decisão dos árbitros. Por isso ele recebe uma exclusão de 2 minutos. Três minutos antes do final da partida, o oficial A da equipa BRANCA entra no campo sem a permissão dos árbitros. Qual é a decisão correta?",
        "opcoes": [
            "a) Advertência para o oficial A da equipa BRANCA.",
            "b) Exclusão de 2 minutos para o oficial A da equipa BRANCA; A equipa BRANCA é reduzida em campo por 1 jogador por 2 minutos; o oficial A pode permanecer na área de substituição.",
            "c) Exclusão de 2 minutos para o oficial A da equipa BRANCA; A equipa BRANCA é reduzida em campo por 1 jogador por 2 minutos; o oficial A deve deixar a área de substituição.",
            "d) Desqualificação para o oficial A da equipa BRANCA (cartão vermelho mostrado pelos árbitros); A equipa BRANCA é reduzida em campo de 1 jogador por 2 minutos",
            "e) Desqualificação para oficial A da equipa BRANCA com relatório escrito (cartões vermelho e azul mostrados pelos árbitros); A equipa BRANCA é reduzida em campo de 1 jogador por 2 minutos."
        ],
        "correta": 3,
        "regra": 16
    },
    {
        "pergunta": "17.1) Os árbitros discordam a que equipa deve ser atribuída uma reposição de bola em jogo. Como deve ser decidida a situação?",
        "opcoes": [
            "a) O árbitro central decide.",
            "b) O árbitro de baliza decide.",
            "c) Os 2 árbitros tomam uma decisão conjunta após consulta.",
            "d) Time-out",
            "e) Nenhum time-out, mas a reposição de bola em jogo só é executada após o sinal de apito."
        ],
        "correta": [
            2,
            3
        ],
        "regra": 17
    },
    {
        "pergunta": "17.2) O sinal automático do relógio público do campo não está a funcionar. O cronometrista não notou o problema e não reage, embora o tempo de jogo já tenha terminado. Neste caso, quem deve dar o apito final?",
        "opcoes": [
            "a) Apenas o secretário.",
            "b) Apenas o árbitro central.",
            "c) Só o delegado.",
            "d) Apenas um dos árbitros",
            "e) Apenas o cronometrista.",
            "f) Ou o cronometrista, ou o delegado ou um dos árbitros."
        ],
        "correta": 5,
        "regra": 17
    },
    {
        "pergunta": "17.3) O jogador nº. 2 da equipa PRETA cometeu uma falta. O árbitro central decide uma desqualificação do jogador nº. 2 da equipa PRETA (cartão vermelho mostrado pelo árbitro) e um lançamento livre. O árbitro de baliza decide uma exclusão de 2 minutos para o jogador nº. 2 da equipa PRETA e um livre de 7 metros. Como deve o jogador nº. 2 da equipa PRETA ser penalizado e como deve o jogo ser retomado?",
        "opcoes": [
            "a) Exclusão de 2 minutos para o jogador nº. 2 da equipa PRETA",
            "b) Desqualificação do jogador nº. 2 da equipa PRETA (cartão vermelho mostrado pelos árbitros)",
            "c) Lançamento livre",
            "d) Livre de 7 metros"
        ],
        "correta": [
            1,
            3
        ],
        "regra": 17
    },
    {
        "pergunta": "17.4) Em caso de dúvida quem decide sobre a exatidão do tempo de jogo?",
        "opcoes": [
            "a) O cronometrista e o secretário.",
            "b) Os dois árbitros chegam a uma decisão conjunta.",
            "c) O cronometrista.",
            "d) Os dois árbitros e o cronometrista chegam a uma decisão conjunta."
        ],
        "correta": 1,
        "regra": 17
    },
    {
        "pergunta": "17.5) Quais as punições que devem constar no relatório do jogo?",
        "opcoes": [
            "a) Todas as desqualificações, exceto aquelas dadas por causa de três suspensões de 2 minutos.",
            "b) Todas as punições, exceto advertências.",
            "c) Todas as suspensões e todas as desqualificações.",
            "d) Desqualificação para faltas perigosas ou conduta antidesportiva grave nos últimos 30 segundos do jogo, se a ação se destina a impedir que os adversários tenham uma oportunidade de marcar.",
            "e) Desqualificações devido a conduta extremamente antidesportiva.",
            "f) Qualquer sanção progressiva durante os últimos 30 segundos do jogo, se a ação se destina a impedir os adversários de criar uma oportunidade de marcar."
        ],
        "correta": 4,
        "regra": 17
    },
    {
        "pergunta": "17.6) Quem está autorizado a dirigir-se aos árbitros durante um jogo?",
        "opcoes": [
            "a) Todos os jogadores",
            "b) Todos os oficiais",
            "c) O oficial responsável da equipa",
            "d) O capitão da equipa"
        ],
        "correta": 2,
        "regra": 17
    },
    {
        "pergunta": "17.7) Os árbitros têm opiniões diferentes sobre quanto tempo de jogo falta jogar. O árbitro de baliza, que é o primeiro árbitro nomeado, indica que faltam jogar 50 segundos, enquanto o árbitro central indica que faltam jogar 42 segundos. Qual a decisão correta?",
        "opcoes": [
            "a) Aplica-se o tempo de jogo mais longo (50 segundos).",
            "b) O primeiro árbitro nomeado decide (50 segundos).",
            "c) O árbitro central decide (42 segundos).",
            "d) Os dois árbitros devem chegar a uma decisão conjunta"
        ],
        "correta": 3,
        "regra": 17
    },
    {
        "pergunta": "17.8) Qual o árbitro que fica como árbitro central, e qual fica como árbitro de baliza, no início do jogo?",
        "opcoes": [
            "a) O primeiro árbitro nomeado fica o árbitro central",
            "b) O primeiro árbitro nomeado fica o árbitro de baliza",
            "c) Os árbitros usam a moeda ao ar para decidir quem começa onde",
            "d) Os árbitros são livres para fazer a sua própria escolha"
        ],
        "correta": 3,
        "regra": 17
    },
    {
        "pergunta": "17.9) Os dois árbitros apitam após uma colisão entre dois jogadores. O árbitro central indica uma falta ofensiva, mas o árbitro de baliza indica uma violação do defesa. Qual deve ser a decisão?",
        "opcoes": [
            "a) A decisão do árbitro de baliza é válida",
            "b) A decisão do árbitro do campo é válida",
            "c) Os árbitros reúnem-se para chegar a uma decisão conjunta",
            "d) O time-out é obrigatório",
            "e) O time-out é necessário, apenas se a decisão conjunta for contra a equipa atacante.",
            "f) O time-out não é obrigatório, se os árbitros estiverem a usar o equipamento eletrónico de comunicação interna."
        ],
        "correta": [
            2,
            3
        ],
        "regra": 17
    },
    {
        "pergunta": "18.1) O que indicam as regras do jogo sobre a distribuição de trabalho entre cronometrista e secretário?",
        "opcoes": [
            "a) O controlo da entrada e saída dos substitutos é feito apenas pelo cronometrista.",
            "b) Geralmente, apenas o cronometrista deve interromper o jogo, quando for necessário.",
            "c) O secretário deve apitar, se observar que um jogador substituto entra no campo demasiado cedo.",
            "d) Se não houver relógio público em campo, o cronometrista mantém as equipas informadas sobre o tempo de jogo ou quanto tempo falta jogar.",
            "e) Contar os números de ataques, quando um jogador está a aguardar 3 ataques, depois de receber intervenção médica no campo, é uma tarefa comum para o cronometrista e secretário."
        ],
        "correta": [
            1,
            3,
            4
        ],
        "regra": 18
    },
    {
        "pergunta": "18.2) O jogador nº. 5 da equipa BRANCA tem uma clara hipótese de marcar. O oficial A da equipa BRANCA insulta o cronometrista. O cronometrista apita no momento em que o jogador nº. 5 da equipa BRANCA está prestes a rematar. A ação foi notada apenas pelo cronometrista. Qual a decisão correta?",
        "opcoes": [
            "a) Lançamento livre para a equipa PRETA.",
            "b) Sanção progressiva para oficial A da equipa BRANCA.",
            "c) Lançamento livre para a equipa BRANCA.",
            "d) Livre de 7 metros para a equipa BRANCA.",
            "e) Relatório escrito."
        ],
        "correta": [
            2,
            4
        ],
        "regra": 18
    },
    {
        "pergunta": "18.3) O oficial responsável da equipa BRANCA insulta o cronometrista sem que isso seja notado pelos árbitros ou pelo delegado. Na próxima interrupção de jogo, o cronometrista informa os árbitros sobre o que aconteceu. Qual a decisão correta?",
        "opcoes": [
            "a) Desqualificação do oficial responsável da equipa BRANCA, relatório escrito (cartões vermelho e azul mostrados pelos árbitros)",
            "b) Exclusão de 2 minutos para o oficial responsável da equipa BRANCA",
            "c) Relatório escrito",
            "d) Advertência para o oficial responsável da equipa BRANCA",
            "e) Nenhuma sanção pessoal possível"
        ],
        "correta": [
            2,
            4
        ],
        "regra": 18
    },
    {
        "pergunta": "18.4) A equipa BRANCA está em posse da bola na linha de lançamento livre da equipa PRETA. O delegado interrompe o jogo e explica aos árbitros que o oficial A da equipa PRETA o insultou. Qual a decisão correta?",
        "opcoes": [
            "a) Advertência para oficial A da equipa PRETA, relatório escrito.",
            "b) Desqualificação do oficial A da equipa PRETA, relatório escrito (cartões vermelho e azul mostrados pelos árbitros).",
            "c) O jogo é retomado com um lançamento livre para a equipa BRANCA na área de substituição da equipa PRETA.",
            "d) O jogo é retomado com um lançamento livre para a equipa BRANCA na linha de lançamento livre da equipa PRETA."
        ],
        "correta": [
            1,
            3
        ],
        "regra": 18
    },
    {
        "pergunta": "18.5) A equipa BRANCA está na posse da bola na linha de lançamento livre da equipa PRETA. O cronometrista interrompe o jogo e explica aos árbitros que o oficial A da equipa BRANCA o insultou. A ação foi notada apenas pelo cronometrista. Qual a decisão correta?",
        "opcoes": [
            "a) Relatório escrito.",
            "b) Exclusão de 2 minutos para oficial A da equipa BRANCA, relatório escrito",
            "c) O jogo é retomado com um lançamento livre para a equipa PRETA na área de substituição da equipa BRANCA.",
            "d) O jogo é retomado com um lançamento Livre para a equipa BRANCA na linha de lançamento livre da equipa PRETA."
        ],
        "correta": [
            0,
            3
        ],
        "regra": 18
    },
    {
        "pergunta": "18.6) Durante o jogo o oficial responsável da equipa BRANCA, repetidamente, movimenta-se para junto da mesa do Cronometrista, isto para orientar a sua equipa. Ao fazê-lo ele protesta sobre as decisões do árbitro. Devido ao barulho em campo, os árbitros não se a percebem disso. Qual a decisão correta?",
        "opcoes": [
            "a) O cronometrista interrompe imediatamente o jogo e informa os árbitros sobre o da equipa BRANCA.",
            "b) O cronometrista espera até à próxima interrupção do jogo e informa os árbitros sobre o comportamento do oficial.",
            "c) Sanção progressiva para o oficial da equipa BRANCA.",
            "d) Nenhuma sanção é possível."
        ],
        "correta": [
            1,
            3
        ],
        "regra": 18
    },
    {
        "pergunta": "18.7) Quando deve o cronometrista informar os árbitros se existir uma violação dos regulamentos na área de substituição, que não tenha sido notada pelos árbitros?",
        "opcoes": [
            "a) Imediatamente",
            "b) No momento da próxima interrupção do jogo"
        ],
        "correta": 1,
        "regra": 18
    },
    {
        "pergunta": "18.8) Se o delegado interromper o jogo por causa de uma violação da equipa BRANCA, o jogo é retomado com a posse de bola da equipa PRETA.",
        "opcoes": [
            "a) Sim",
            "b) Não"
        ],
        "correta": 0,
        "regra": 18
    },
    {
        "pergunta": "SAR1) Qual deve ser a distância entre a linha central e o início dos bancos de substituição/suplentes?",
        "opcoes": [
            "a) 1 metro",
            "b) 2 metros",
            "c) 3 metros",
            "d) 3,5 metros"
        ],
        "correta": 3
    },
    {
        "pergunta": "SAR2) O Oficial A da equipa BRANCA já recebeu um aviso enquanto estava sentado no banco. Ele agora deixa a área de substituição e senta-se na área dos espectadores. A partir desta posição, continua a protestar contra as decisões dos árbitros. Decisão correta?",
        "opcoes": [
            "a) Inexistência de ação.",
            "b) Suspensão de 2 minutos para o Oficial A da equipa BRANCA.",
            "c) Desclassificação do Oficial A da equipa BRANCA (cartão vermelho mostrado pelos árbitros).",
            "d) Desclassificação do Oficial A da equipa BRANCA, relatório escrito (cartões vermelhos e azuis mostrados pelos árbitros).",
            "e) A equipa BRANCA será reduzida em 1 jogador em campo por 2 minutos."
        ],
        "correta": [
            1,
            4
        ]
    }
]

;

let indiceAtual = 0;
let acertos = 0;
let resultados = [];
let podeAvancar = false; 

document.addEventListener('DOMContentLoaded', function () {
  const startBtn = document.getElementById('startQuizBtn');
  const startPage = document.getElementById('startPage');
  const modeSelection = document.getElementById('modeSelection');
  const appContainer = document.getElementById('appContainer');
  const randomModeBtn = document.getElementById('randomModeBtn');
  const orderedModeBtn = document.getElementById('orderedModeBtn');
  const videoTestBtn = document.getElementById('videoTestBtn');
  const rulesModeBtn = document.getElementById('rulesModeBtn');
  const randomOptions = document.getElementById('randomOptions');
  const startRandomQuiz = document.getElementById('startRandomQuiz');
  const numQuestions = document.getElementById('numQuestions');
  const quizContainer = document.getElementById('quizContainer');
  const nextBtn = document.getElementById('nextBtn');
  const toggleDarkMode = document.getElementById('toggleDarkMode');
  const exportBtn = document.getElementById('exportBtn');
  const progressText = document.getElementById('progress');
  const progressBar = document.getElementById('progressBar');
  const scoreEl = document.getElementById('score');
  const percentEl = document.getElementById('percentAcertos');
  const correctSound = document.getElementById('correctSound');
  const wrongSound = document.getElementById('wrongSound');

  const videoTestModal = document.getElementById('videoTestModal');
  const closeVideoModal = document.getElementById('closeVideoModal');
  const rulesModal = document.getElementById('rulesModal');
  const rulesList = document.getElementById('rulesList');
  const closerulesModal = document.getElementById('closerulesModal');

  const backBtn = document.getElementById('backBtn');
  const backConfirmModal = document.getElementById('backConfirmModal');
  const backYesBtn = document.getElementById('backYesBtn');
  const backNoBtn = document.getElementById('backNoBtn');

  window.perguntasOriginais = [...perguntas];

  const regras = [
    "Regra 1","Regra 2","Regra 3","Regra 4","Regra 5","Regra 6",
    "Regra 7","Regra 8","Regra 9","Regra 10","Regra 11","Regra 12",
    "Regra 13","Regra 14","Regra 15","Regra 16","Regra 17","Regra 18"
  ];
  const coresRegras = [
    "#f87171","#fbbf24","#34d399","#60a5fa","#a78bfa",
    "#f472b6","#facc15","#4ade80","#3b82f6","#c084fc",
    "#f472b6","#fb7185","#fcd34d","#34d399","#60a5fa",
    "#818cf8","#f472b6","#f472b6"
  ];

  // --------------------
  // Funções auxiliares
  // --------------------
 function atualizarScore() {
    const totalRespondidas = resultados.length;
    scoreEl.textContent = `Acertos: ${acertos} de ${totalRespondidas}`;
    const percentAcertos = totalRespondidas>0?Math.round((acertos/totalRespondidas)*100):0;
    percentEl.textContent = `Percentual de acerto: ${percentAcertos}%`;
  }

  function ocultarLogos() {
    document.querySelectorAll('.fixed-logos img').forEach(img=>img.style.display='none');
  }

  function arraysIguais(a,b){ return a.length===b.length && a.sort().every((v,i)=>v==b.sort()[i]); }

  // --------------------
  // Eventos Botões
  // --------------------
  startBtn?.addEventListener('click', ()=>{ startPage.style.display='none'; modeSelection.style.display='flex'; });
  randomModeBtn?.addEventListener('click', ()=> randomOptions.style.display='flex');
  startRandomQuiz?.addEventListener('click', ()=>{
    const n = parseInt(numQuestions.value,10);
    perguntas = [...window.perguntasOriginais].sort(()=>Math.random()-0.5).slice(0,n);
    iniciarQuiz();
  });
  orderedModeBtn?.addEventListener('click', ()=>{
    perguntas = [...window.perguntasOriginais];
    iniciarQuiz();
  });

  videoTestBtn?.addEventListener('click', ()=> videoTestModal.classList.remove('hidden'));
  closeVideoModal?.addEventListener('click', ()=> videoTestModal.classList.add('hidden'));

  rulesModeBtn?.addEventListener('click', ()=>{
    rulesList.innerHTML='';
    regras.forEach((regra,idx)=>{
      const btn=document.createElement('button');
      btn.textContent= regra;
      btn.style.backgroundColor=coresRegras[idx];
      btn.style.color='white';
      btn.style.padding='0.5rem 1rem';
      btn.style.border='none';
      btn.style.borderRadius='0.5rem';
      btn.style.cursor='pointer';
      btn.style.fontWeight='600';
      btn.addEventListener('click', ()=> startQuizPorRegra(idx+1));
      rulesList.appendChild(btn);
    });
    rulesModal.classList.remove('hidden');
  });
  closerulesModal?.addEventListener('click', ()=> rulesModal.classList.add('hidden'));

  backBtn?.addEventListener('click', ()=> backConfirmModal.classList.remove('hidden'));
  backNoBtn?.addEventListener('click', ()=> backConfirmModal.classList.add('hidden'));
  backYesBtn?.addEventListener('click', ()=>{
    appContainer.style.display='none';
    startPage.style.display='flex';
    modeSelection.style.display='none';
    indiceAtual=0; acertos=0; resultados=[]; atualizarScore();
    backConfirmModal.classList.add('hidden');
  });

  toggleDarkMode?.addEventListener('click', ()=> document.body.classList.toggle('dark-mode'));

  nextBtn?.addEventListener('click', proximaPergunta);

  // --------------------
  // Funções Quiz
  // --------------------
  function iniciarQuiz(){
    indiceAtual=0; acertos=0; resultados=[];
    modeSelection.style.display='none'; appContainer.style.display='block';
    ocultarLogos(); renderPergunta();
  }

  function startQuizPorRegra(numeroRegra){
    perguntas = window.perguntasOriginais.filter(p=>p.regra===numeroRegra);
    if(perguntas.length===0){ alert("Não existem perguntas para esta regra."); return; }
    rulesModal.classList.add('hidden');
    iniciarQuiz();
  }

  function renderPergunta(){
    if(!perguntas[indiceAtual]) return;
    const p=perguntas[indiceAtual];
    quizContainer.innerHTML=`
      <div class="mb-4">
        <h2 class="text-lg font-semibold mb-2">${p.pergunta}</h2>
        <form id="formRespostas">
          ${p.opcoes.map((op,idx)=>`
            <div>
              <label style="display:block; padding:0.5rem; border-radius:0.5rem; cursor:pointer;">
                <input type="checkbox" name="resposta" value="${idx}"> ${op}
              </label>
            </div>`).join('')}
        </form>
      </div>
      <div id="feedback" class="mt-2"></div>
    `;
    progressText.textContent=`Progresso: ${indiceAtual+1}/${perguntas.length}`;
    progressBar.style.width=`${((indiceAtual+1)/perguntas.length)*100}%`;
    nextBtn.disabled=false; podeAvancar=false; nextBtn.textContent="Confirmar";
    document.querySelectorAll('input[name="resposta"]').forEach(i=>{ i.disabled=false; i.parentElement.style.backgroundColor=''; });
    atualizarScore();
  }

  function proximaPergunta(){
    const form=document.getElementById('formRespostas');
    if(!form) return;
    const inputs=Array.from(form.querySelectorAll('input[name="resposta"]'));
    const selecionados=inputs.filter(i=>i.checked).map(i=>Number(i.value));
    const feedback=document.getElementById('feedback');
    const perguntaAtual=perguntas[indiceAtual];
    let corretaArr=Array.isArray(perguntaAtual.correta)?perguntaAtual.correta:[perguntaAtual.correta];

    if(!podeAvancar){
      if(selecionados.length===0) return;
      const corretaResposta=arraysIguais(corretaArr,selecionados);
      if(corretaResposta){ acertos++; feedback.textContent="Correto!"; feedback.style.color="green"; correctSound?.play(); }
      else{ feedback.textContent="Incorreto!"; feedback.style.color="red"; wrongSound?.play(); }

      inputs.forEach(input=>{
        const label=input.parentElement; const idx=Number(input.value);
        if(corretaArr.includes(idx)) label.style.backgroundColor="#a7f3d0";
        if(selecionados.includes(idx)&&!corretaArr.includes(idx)) label.style.backgroundColor="#fecaca";
        input.disabled=true;
      });

      resultados[indiceAtual]=corretaResposta; atualizarScore();
      podeAvancar=true; nextBtn.textContent="Próxima";
    }else{
      podeAvancar=false;
      if(indiceAtual<perguntas.length-1){ indiceAtual++; renderPergunta(); }
      else{ quizContainer.innerHTML=`<h2 class="text-xl font-bold mb-4">Quiz terminado!</h2><p>Acertos: ${acertos} em ${perguntas.length} perguntas.</p>`; nextBtn.disabled=true; }
    }
  }
  // --- Exportar PDF ---
  exportBtn?.addEventListener('click', () => {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF({ unit: "mm", format: "a4" });
    const margin = 15;
    const maxWidth = 210 - 2 * margin;
    let y = margin;
    const lineHeight = 6;
    const totalPerguntas = perguntas.length;
    const percentAcerto = totalPerguntas > 0 ? Math.round((acertos / totalPerguntas) * 100) : 0;

    doc.setFontSize(20);
    doc.setFont(undefined, 'bold');
    doc.setTextColor(30, 30, 60);
    doc.text("Resultados do Quiz", margin, y);
    y += lineHeight * 2;

    doc.setFontSize(12);
    doc.setFont(undefined, 'normal');
    doc.setTextColor(50);
    doc.text(`Perguntas respondidas: ${resultados.length} / ${totalPerguntas}`, margin, y);
    y += lineHeight;
    doc.text(`Acertos: ${acertos}`, margin, y);
    y += lineHeight;
    doc.text(`Percentual de acerto: ${percentAcerto}%`, margin, y);
    y += lineHeight * 2;

    perguntas.forEach((p,i) => {
      const blocoPadding = 4;
      const blocoWidth = maxWidth;
      const blocoColor = i%2===0?[245,245,245]:[220,235,245];

      const perguntaLinhas = doc.splitTextToSize(`${i+1}. ${p.pergunta}`, blocoWidth - 2*blocoPadding);
      const opLinhasArray = p.opcoes.map((op, idx)=>{
        const isCorreta = Array.isArray(p.correta)?p.correta.includes(idx):p.correta===idx;
        return { linhas: doc.splitTextToSize(`${String.fromCharCode(97+idx)}) ${op}`, blocoWidth - 2*blocoPadding), isCorreta };
      });

      let blocoAltura = perguntaLinhas.length*lineHeight + lineHeight;
      opLinhasArray.forEach(opItem=>blocoAltura+=opItem.linhas.length*lineHeight);
      blocoAltura += lineHeight + 2*blocoPadding;

      if(y+blocoAltura>297-margin){doc.addPage();y=margin;}
      doc.setFillColor(...blocoColor);
      doc.roundedRect(margin, y-blocoPadding, blocoWidth, blocoAltura,3,3,'F');
      doc.setDrawColor(30,60,120);
      doc.setLineWidth(0.7);
      doc.roundedRect(margin, y-blocoPadding, blocoWidth, blocoAltura,3,3,'S');

      doc.setFont(undefined,'bold'); doc.setTextColor(30,60,120);
      perguntaLinhas.forEach(line=>{doc.text(line, margin+blocoPadding, y); y+=lineHeight;});
      y+=2;

      doc.setFont(undefined,'normal');
      opLinhasArray.forEach(opItem=>{
        doc.setTextColor(opItem.isCorreta?"green":50);
        opItem.linhas.forEach(line=>{doc.text(line, margin+blocoPadding, y); y+=lineHeight;});
      });

      y+=2;
      const userResp = resultados[i]!==undefined?resultados[i]:false;
      doc.setFont(undefined,'bold'); doc.setTextColor(userResp?"green":"red");
      doc.text(userResp?"Correto":"Incorreto", margin+blocoPadding, y);
      y+=lineHeight+blocoPadding;
    });

    doc.save("resultados_quiz_profissional_final.pdf");
  });
});
