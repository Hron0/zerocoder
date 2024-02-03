export const codeExamples: Record<string, string> = {
    first: `https://api.proxyapi.ri/openai`,
    second: 'Authorization: Bearer PROXY_API_KEY',
    third: `curl https://api.proxyapi.ru/openai/v1/chat/completions \\
    -H "Content-Type: application/json" \\
    -H "Authorization: Bearer $PROXY_API_KEY" \\
    -d '{
        "model": "gpt-3.5-turbo",
        "messages": [{"role": "user", "content": "Say this is a test!"}],
        "temperature": 0.7
    }' `,
    fourth: `from openai import OpenAI
    
    client = OpenAI(
        api_key="{PROXY_API_KEY}",
        base_url="https://api.proxyapi.ru/openai/v1",
    )
    
    chat_completion = client.chat.completions.create(
        model="gpt-3.5-turbo", messages=[{"role": "user", "content": "Hello world"}]
    `,
    fifth: `from openai import OpenAI
    
    client = OpenAI(
        api_key="{PROXY_API_KEY}",
        base_url="https://api.proxyapi.ru/openai/v1",
    )
    
    response = client.images.generate(
        model="dall-e-3",
        prompt="A painting of a glass of water on a table.",
        n=4,
        size="1024x1024",
    )`
}