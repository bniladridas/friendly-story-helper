import { GoogleGenerativeAI } from '@google/generative-ai';

const apiKey = import.meta.env.VITE_GOOGLE_API_KEY;
if (!apiKey) {
  throw new Error('VITE_GOOGLE_API_KEY is not defined in the environment variables');
}

const genAI = new GoogleGenerativeAI(apiKey);

export async function analyzeTruthfulness(statement: string): Promise<string> {
  const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });

  const prompt = `
    Act as a friendly, encouraging teacher helping a young student understand their story or statement. 
    Analyze the following in a gentle, supportive way:
    "${statement}"
    
    Important guidelines:
    1. Use simple, child-friendly language
    2. Always be encouraging and positive
    3. Focus on learning opportunities
    4. Avoid any negative or harsh words
    5. Use emoji where appropriate
    6. Keep explanations short and clear
    
    Format your response in Markdown with these child-friendly sections:
    
    # Let's Look at Your Story! 🌟
    [Give a friendly, encouraging overview]
    
    ## What We Learned 📚
    [Share 2-3 simple, positive observations]
    
    ## Fun Facts! ⭐
    [Share an interesting, related fact that children might enjoy]
    
    ## Keep Growing! 🌱
    [Offer 1-2 gentle suggestions for improvement, always phrased positively]
    
    Use proper Markdown formatting but keep the language simple and fun.
    Always end with encouragement and a positive note!
  `;

  const result = await model.generateContent(prompt);
  const response = await result.response;
  return response.text();
}
