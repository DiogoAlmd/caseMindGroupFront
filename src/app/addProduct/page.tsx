import NavBar from "@/components/NavBar"
import { Container } from "react-bootstrap";

export default function Home() {
  return(
      <main>
        <section style={{backgroundColor: '#eee'}}>
        <NavBar/>

        <div className="container py-5">
        <h4 className="text-center mt-4 mb-5"><strong>Adicionar produto</strong></h4>
        <form>
            <Container className="form-group">
                <label htmlFor="exampleFormControlInput1">Nome do produto</label>
                <input type="input" className="form-control" id="exampleFormControlInput1"/>
            </Container>

            <Container className="form-group mt-3">
                <label htmlFor="exampleFormControlInput1">Descrição</label>
                <input type="input" className="form-control" id="exampleFormControlInput1"/>
            </Container>

            <Container className="form-group mt-3">
                <label htmlFor="exampleFormControlFile1">Exemplo de input de arquivo</label>
                <input type="file" className="form-control-file" id="exampleFormControlFile1"/>
            </Container>

            <Container className="form-group mt-3">
                <label htmlFor="exampleFormControlInput1">Valor</label>
                <input type="input" className="form-control" id="exampleFormControlInput1"/>
                <button type="submit" className="btn form-group mt-3 btn-primary">Adicionar</button>
            </Container>

        </form>
        </div>
        </section>
    </main>
  );
};