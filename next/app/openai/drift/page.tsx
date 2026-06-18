import { BackgroundExamplePage } from "@/components/background-example-page"

export default function OpenAIDriftPage() {
  return (
    <BackgroundExamplePage
      brand="openai"
      mode="drift"
      src="/openai-black-monoblossom-spacious.svg"
      title="OpenAI"
      description="A seamless monoblossom tile that moves slowly behind hero content, keeping the landing page alive without client-side canvas."
      tile={112}
      speed={14}
      steps={[2, 1]}
    />
  )
}
