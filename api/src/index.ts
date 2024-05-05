import express from "express";

const app = express();

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

export async function POST(request): Promise<Response> {
    const blob = await request.blob();
    console.log(blob);
    return new Response();

}

app.post("/fileView", (req, res)=>{
    return POST(req);
})

