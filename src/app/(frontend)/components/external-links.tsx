import { Button } from "@/components/ui/button"

export async function ExternalLinks() {
  const MY_LINKS = [
    { id: "1", label: "Inscreva-se no NLW", link: "https://app.rocketseat.com.br/" },
    { id: "2", label: "Baixe meu e-book", link: "https://app.rocketseat.com.br/" },
    { id: "3", label: "Veja meu portfólio", link: "https://app.rocketseat.com.br/" },
    { id: "4", label: "Conheça meu curso", link: "https://app.rocketseat.com.br/" },
  ]

  return (
    <div className="flex flex-col gap-4 m-6 text-primary text-md">
      {MY_LINKS.map((link) => (
        <Button key={link.id} asChild>
          <a href={link.link} target="_blank">
            {link.label}
          </a>
        </Button>
      ))}
    </div>
  )
}
