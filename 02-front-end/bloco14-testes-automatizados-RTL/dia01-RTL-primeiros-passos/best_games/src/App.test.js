import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('Testes best games', () => {

  test('Exercicio 1', () => {
    render(<App />);
    const linkElement = screen.getByText('Carregando...');
    expect(linkElement).toBeInTheDocument();
  });

  test('Exercicio 2', async () => {
    render(<App />);
    const minecraft = await screen.findByRole('heading', { name: /Minecraft/i, level: 3 });
    expect(minecraft).toBeInTheDocument();
  })

  test('Exercicio 3', async () => {
    render(<App />);
    const verDetalhes = await screen.findAllByRole('link', { name: /Ver Detalhes/i })
    userEvent.click(verDetalhes[1]);

    const sales = await screen.findByText(/Sales/i);
    expect(sales).toBeInTheDocument();

    const release = await screen.findByText(/Release Year/i);
    expect(release).toBeInTheDocument();
  })

})

