
def formacaoDoTime(pontuacao, tamanho_do_time, k):
    total = 0
    for i in range(tamanho_do_time):
        print(f'Lista: {pontuacao}')
        if len(pontuacao) >= k:
            # K menor que o tamanho do vetor
            lowerArray = pontuacao[:k]
            print(f'{k} primeiros dígitos: {lowerArray}')
            upperArray = pontuacao[-k:]
            print(f'{k} últimos dígitos: {upperArray}')
            highest_point = max(lowerArray + upperArray)

        else:
            # K maior que o tamanho do vetor
            highest_point = (max(pontuacao))
        print(f'Elemento removido: {highest_point}')
        print('')
        ponto = pontuacao.pop(pontuacao.index(highest_point))
        total += ponto
    return f'Total: {total}'


teste = [10, 5, 5, 7, 9, 6, 10]

print(formacaoDoTime(teste, 3, 2))
