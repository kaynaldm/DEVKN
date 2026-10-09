import Image from 'next/image'

export function AboutSection() {
  return (
    <section id="sobre" className="relative py-12 md:py-24">
      <div className="w-full px-6 md:px-12 lg:px-20 xl:px-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1 relative aspect-square md:aspect-[4/5] lg:aspect-square overflow-hidden rounded-2xl border border-border/50 bg-card/50 shadow-2xl">
            <Image
              src="/about_foto.jpg"
              alt="História"
              fill
              className="object-cover object-center"
            />
            {/* Gradiente sutil por cima */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
          </div>

          <div className="order-1 lg:order-2 flex flex-col justify-center">
            <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary w-fit mb-6">
              Sobre Mim
            </div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl text-balance mb-6">
              De desenvolvedor a arquiteto de soluções completas
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed text-pretty">
              <p>
                Desde que comecei a programar, minha pergunta favorita sempre foi: &quot;E se eu pudesse automatizar isso?&quot;. Meu nome é Kaynã, tenho 20 anos e transformei a curiosidade em minha principal ferramenta de trabalho.
              </p>
              <p>
                Enquanto muitos veem a internet como um conjunto de páginas, eu a vejo como uma fonte infinita de dados e processos que podem ser otimizados. Me especializei em navegar por sites complexos, contornar barreiras técnicas e transformar tarefas manuais exaustivas em processos automáticos que rodam com um único clique.
              </p>
              <p>
                Para mim, programar não é apenas digitar linhas de código, é criar autonomia e eficiência. Meu portfólio reflete essa jornada: projetos que nasceram de problemas reais e foram resolvidos com lógica, persistência e a vontade de fazer as coisas funcionarem de forma mais inteligente.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
