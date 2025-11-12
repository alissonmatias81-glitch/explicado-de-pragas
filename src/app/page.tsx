"use client"

import { useState } from "react"
import { AlertTriangle, Shield, Search, Sun, Circle } from "lucide-react"

interface Praga {
  id: number
  nome: string
  nomeCientifico: string
  descricao: string
  culturas: string[]
  sintomas: string[]
  controle: string[]
  prevencao: string[]
  icon: string
  cor: string
}

const pragas: Praga[] = [
  {
    id: 1,
    nome: "Lagarta-do-Cartucho",
    nomeCientifico: "Spodoptera frugiperda",
    descricao: "Uma das pragas mais destrutivas em culturas de milho, sorgo e arroz. As lagartas se alimentam das folhas jovens no cartucho da planta.",
    culturas: ["Milho", "Sorgo", "Arroz", "Algodão"],
    sintomas: [
      "Furos irregulares nas folhas",
      "Presença de fezes escuras no cartucho",
      "Destruição do ponto de crescimento",
      "Plantas com aspecto de 'raspadas'"
    ],
    controle: [
      "Aplicação de inseticidas biológicos (Bacillus thuringiensis)",
      "Uso de inseticidas químicos seletivos",
      "Controle biológico com parasitoides",
      "Rotação de culturas"
    ],
    prevencao: [
      "Monitoramento constante da lavoura",
      "Plantio na época adequada",
      "Eliminação de plantas hospedeiras",
      "Uso de armadilhas com feromônios"
    ],
    icon: "bug",
    cor: "from-red-500 to-orange-600"
  },
  {
    id: 2,
    nome: "Mosca-Branca",
    nomeCientifico: "Bemisia tabaci",
    descricao: "Pequeno inseto sugador que transmite diversos vírus para plantas. Causa danos diretos pela sucção de seiva e indiretos pela transmissão de doenças.",
    culturas: ["Tomate", "Feijão", "Soja", "Algodão", "Melancia"],
    sintomas: [
      "Amarelecimento das folhas",
      "Presença de fumagina (fungo preto)",
      "Enrolamento das folhas",
      "Redução no crescimento da planta",
      "Transmissão de viroses"
    ],
    controle: [
      "Inseticidas sistêmicos",
      "Óleo mineral ou vegetal",
      "Controle biológico com fungos entomopatogênicos",
      "Uso de variedades resistentes"
    ],
    prevencao: [
      "Uso de barreiras físicas (telas)",
      "Eliminação de plantas daninhas",
      "Monitoramento com armadilhas amarelas",
      "Rotação de culturas"
    ],
    icon: "wind",
    cor: "from-blue-500 to-cyan-600"
  },
  {
    id: 3,
    nome: "Percevejo-Marrom",
    nomeCientifico: "Euschistus heros",
    descricao: "Principal praga da cultura da soja. Suga a seiva das vagens e grãos, causando perdas significativas na produtividade e qualidade.",
    culturas: ["Soja", "Feijão", "Girassol"],
    sintomas: [
      "Vagens chochas ou mal formadas",
      "Grãos manchados e enrugados",
      "Retenção foliar (soja louca)",
      "Redução do peso dos grãos",
      "Atraso na maturação"
    ],
    controle: [
      "Inseticidas químicos no momento adequado",
      "Controle biológico com parasitoides de ovos",
      "Manejo integrado de pragas (MIP)",
      "Aplicação em bordaduras primeiro"
    ],
    prevencao: [
      "Monitoramento semanal com pano-de-batida",
      "Eliminação de plantas hospedeiras",
      "Vazio sanitário",
      "Plantio na época recomendada"
    ],
    icon: "shield",
    cor: "from-green-500 to-emerald-600"
  },
  {
    id: 4,
    nome: "Cigarrinha-das-Pastagens",
    nomeCientifico: "Mahanarva fimbriolata",
    descricao: "Praga importante em pastagens e cana-de-açúcar. Tanto adultos quanto ninfas sugam a seiva, injetando toxinas que causam danos severos.",
    culturas: ["Cana-de-açúcar", "Pastagens", "Capim"],
    sintomas: [
      "Amarelecimento e secamento das folhas",
      "Redução da produtividade",
      "Morte de plantas em reboleiras",
      "Presença de espuma na base das plantas"
    ],
    controle: [
      "Fungos entomopatogênicos (Metarhizium anisopliae)",
      "Inseticidas químicos em casos severos",
      "Controle cultural com fogo controlado",
      "Uso de variedades resistentes"
    ],
    prevencao: [
      "Monitoramento populacional",
      "Manejo adequado da pastagem",
      "Controle biológico preventivo",
      "Evitar excesso de nitrogênio"
    ],
    icon: "droplets",
    cor: "from-purple-500 to-pink-600"
  },
  {
    id: 5,
    nome: "Broca-da-Cana",
    nomeCientifico: "Diatraea saccharalis",
    descricao: "Lagarta que perfura o colmo da cana-de-açúcar, causando perda de peso e facilitando entrada de fungos que deterioram a qualidade do caldo.",
    culturas: ["Cana-de-açúcar", "Milho", "Sorgo"],
    sintomas: [
      "Galerias no interior do colmo",
      "Folhas secas no centro da planta",
      "Quebra de colmos",
      "Redução do teor de açúcar",
      "Entrada de fungos (podridão vermelha)"
    ],
    controle: [
      "Controle biológico com Cotesia flavipes (vespa parasitoide)",
      "Liberação de Trichogramma (parasitoide de ovos)",
      "Inseticidas em casos extremos",
      "Variedades resistentes"
    ],
    prevencao: [
      "Monitoramento de adultos com armadilhas luminosas",
      "Eliminação de soqueiras velhas",
      "Plantio de mudas sadias",
      "Controle biológico preventivo"
    ],
    icon: "sprout",
    cor: "from-yellow-500 to-orange-600"
  },
  {
    id: 6,
    nome: "Ácaro-Rajado",
    nomeCientifico: "Tetranychus urticae",
    descricao: "Ácaro polífago que ataca diversas culturas. Forma teias nas folhas e suga a seiva, causando descoloração e queda prematura das folhas.",
    culturas: ["Tomate", "Morango", "Feijão", "Algodão", "Maçã"],
    sintomas: [
      "Pontos amarelados nas folhas",
      "Presença de teias finas",
      "Bronzeamento das folhas",
      "Queda prematura de folhas",
      "Redução da fotossíntese"
    ],
    controle: [
      "Acaricidas específicos",
      "Óleo mineral ou vegetal",
      "Controle biológico com ácaros predadores",
      "Enxofre em pó ou calda sulfocálcica"
    ],
    prevencao: [
      "Irrigação adequada (ácaros preferem ambiente seco)",
      "Monitoramento regular das folhas",
      "Evitar excesso de nitrogênio",
      "Manter inimigos naturais na área"
    ],
    icon: "leaf",
    cor: "from-teal-500 to-green-600"
  }
]

export default function Home() {
  const [pragaSelecionada, setPragaSelecionada] = useState<Praga | null>(null)
  const [busca, setBusca] = useState("")

  const pragasFiltradas = pragas.filter(praga =>
    praga.nome.toLowerCase().includes(busca.toLowerCase()) ||
    praga.nomeCientifico.toLowerCase().includes(busca.toLowerCase()) ||
    praga.culturas.some(cultura => cultura.toLowerCase().includes(busca.toLowerCase()))
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-b border-green-200 dark:border-gray-700 sticky top-0 z-10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-3 rounded-2xl shadow-lg">
                <Circle className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100">
                  Guia de Pragas Agrícolas
                </h1>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Identificação, controle e prevenção
                </p>
              </div>
            </div>
            
            {/* Busca */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar por praga ou cultura..."
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Conteúdo Principal */}
      <main className="container mx-auto px-4 py-8">
        {/* Cards de Pragas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {pragasFiltradas.map((praga) => (
            <div
              key={praga.id}
              onClick={() => setPragaSelecionada(praga)}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:scale-105 overflow-hidden"
            >
              <div className={`h-3 bg-gradient-to-r ${praga.cor}`} />
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-1">
                      {praga.nome}
                    </h3>
                    <p className="text-sm italic text-gray-600 dark:text-gray-400">
                      {praga.nomeCientifico}
                    </p>
                  </div>
                  <div className={`bg-gradient-to-br ${praga.cor} p-3 rounded-xl`}>
                    <Circle className="w-6 h-6 text-white" />
                  </div>
                </div>
                
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                  {praga.descricao}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {praga.culturas.slice(0, 3).map((cultura, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs rounded-full font-medium"
                    >
                      {cultura}
                    </span>
                  ))}
                  {praga.culturas.length > 3 && (
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs rounded-full font-medium">
                      +{praga.culturas.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {pragasFiltradas.length === 0 && (
          <div className="text-center py-12">
            <Circle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Nenhuma praga encontrada para "{busca}"
            </p>
          </div>
        )}

        {/* Modal de Detalhes */}
        {pragaSelecionada && (
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setPragaSelecionada(null)}
          >
            <div
              className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className={`h-2 bg-gradient-to-r ${pragaSelecionada.cor}`} />
              
              <div className="p-6 md:p-8">
                {/* Header do Modal */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-start gap-4">
                    <div className={`bg-gradient-to-br ${pragaSelecionada.cor} p-4 rounded-2xl`}>
                      <Circle className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-2">
                        {pragaSelecionada.nome}
                      </h2>
                      <p className="text-lg italic text-gray-600 dark:text-gray-400">
                        {pragaSelecionada.nomeCientifico}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => setPragaSelecionada(null)}
                    className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 text-2xl font-bold"
                  >
                    ×
                  </button>
                </div>

                {/* Descrição */}
                <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg leading-relaxed">
                  {pragaSelecionada.descricao}
                </p>

                {/* Culturas Afetadas */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-3 flex items-center gap-2">
                    <Sun className="w-5 h-5 text-yellow-500" />
                    Culturas Afetadas
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {pragaSelecionada.culturas.map((cultura, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full font-medium"
                      >
                        {cultura}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Sintomas */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-3 flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-orange-500" />
                    Sintomas e Danos
                  </h3>
                  <ul className="space-y-2">
                    {pragaSelecionada.sintomas.map((sintoma, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-orange-500 mt-1">•</span>
                        <span className="text-gray-700 dark:text-gray-300">{sintoma}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Controle */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-3 flex items-center gap-2">
                    <Shield className="w-5 h-5 text-blue-500" />
                    Métodos de Controle
                  </h3>
                  <ul className="space-y-2">
                    {pragaSelecionada.controle.map((metodo, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-blue-500 mt-1">•</span>
                        <span className="text-gray-700 dark:text-gray-300">{metodo}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Prevenção */}
                <div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-3 flex items-center gap-2">
                    <Circle className="w-5 h-5 text-green-500" />
                    Medidas Preventivas
                  </h3>
                  <ul className="space-y-2">
                    {pragaSelecionada.prevencao.map((medida, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-green-500 mt-1">•</span>
                        <span className="text-gray-700 dark:text-gray-300">{medida}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-t border-green-200 dark:border-gray-700 mt-12">
        <div className="container mx-auto px-4 py-6 text-center text-gray-600 dark:text-gray-400">
          <p className="text-sm">
            💡 <strong>Dica:</strong> O manejo integrado de pragas (MIP) combina diferentes métodos de controle para resultados mais eficazes e sustentáveis.
          </p>
        </div>
      </footer>
    </div>
  )
}
