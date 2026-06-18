import { BackgroundExamplePage } from "@/components/background-example-page"

export default function OpenAIDriftPage() {
  return (
    <BackgroundExamplePage
      brand="openai"
      mode="drift"
      src="/openai-black-monoblossom-spacious.svg"
      title="OpenAI"
      description="A seamless monoblossom pattern that drifts slowly behind the hero, keeping the page gently alive."
      tile={400}
      speed={15}
      steps={[0, 1]}
    />
  )
}
