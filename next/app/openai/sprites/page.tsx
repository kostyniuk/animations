import { BackgroundExamplePage } from "@/components/background-example-page"

export default function OpenAISpritesPage() {
  return (
    <BackgroundExamplePage
      brand="openai"
      mode="sprites"
      src="/openai-black-monoblossom.svg"
      title="OpenAI"
      description="A field of OpenAI marks that drifts and springs away from your pointer, giving the hero a soft, playful sense of life."
      size={30}
      density={0.9}
      speed={0.85}
      pushRadius={170}
    />
  )
}
