import { Injectable } from '@nestjs/common';

@Injectable()
export class LoveService {
  private readonly currentYear: number = 2024;
  private readonly partnerName: string = 'Johan';
  private readonly loveDeclaration: string = `
    Johan, no hay palabras suficientes para expresar todo lo que siento por ti.
    Eres el código fuente de mi felicidad, el algoritmo perfecto que da sentido a mi vida,
    y el sistema operativo que mantiene mi corazón latiendo con fuerza.
  `;

  private futureDreams: string[] = [
    'Vernos en una gran casa, llena de amor, risas y sueños cumplidos',
    'Construir juntos un futuro donde nuestras metas y pasiones se unan',
    'Criar a nuestros hijos con valores, amor y orgullo por nuestra historia',
    'Ser ese equipo invencible que enfrenta todo con valentía y fe',
    'Seguir siendo los mejores amigos y amantes, sin importar los años que pasen',
  ];

  public generateLoveMessage(): string {
    const introduction = this.getIntroduction();
    const gratitude = this.getGratitude();
    const reflections = this.getReflections();
    const dreams = this.getDreams();
    const conclusion = this.getConclusion();

    return `
    Querido ${this.partnerName},

    ${introduction}

    ${gratitude}

    ${reflections}

    ${dreams}

    ${conclusion}

    Con todo mi amor, siempre tuya ❤️
    `;
  }

  private getIntroduction(): string {
    return `
    Al iniciar este mensaje, no puedo evitar pensar en todas las líneas de código de nuestra historia.
    Cada momento juntos es como una función bien diseñada: llena de propósito, pasión y significado.
    Este 2024 ha sido un año que marcó un antes y un después en nuestras vidas, y todo es gracias a ti.
    `;
  }

  private getGratitude(): string {
    return `
    Gracias por ser mi compañero, mi roca y mi mayor inspiración.  
    Este año me regalaste el mayor proyecto de todos: nuestra hija. Ella es el resultado más hermoso
    de nuestro amor y una constante fuente de alegría en nuestras vidas.  
    Tú me haces sentir como la mujer más feliz y realizada, y no hay manera de agradecerte lo suficiente.
    `;
  }

  private getReflections(): string {
    return `
    Este año ha sido como un ciclo infinito de aprendizaje. Tuvimos momentos de éxito absoluto
    y otros donde los errores parecían constantes, pero ¿sabes qué? Cada prueba, cada caída, y cada desafío
    solo reforzó el sistema operativo de nuestra relación. Nos caímos, depuramos errores y nos levantamos,
    más fuertes que nunca.  
    Al final de este año, puedo decir con certeza que hemos superado cada adversidad juntos, y estoy
    infinitamente agradecida por ello.
    `;
  }

  private getDreams(): string {
    const dreamsList = this.futureDreams.map((dream, index) => `  ${index + 1}. ${dream}`).join('\n');

    return `
    Cuando pienso en el futuro, no puedo evitar sonreír. Veo un camino lleno de amor, logros y sueños compartidos.  
    Estos son algunos de los sueños que tengo contigo:

    ${dreamsList}

    Me imagino dentro de 20, 30 o incluso 50 años, sentados juntos, riéndonos de todo lo que hemos vivido
    y agradeciendo por habernos encontrado. Nuestro amor es la función recursiva que siempre encuentra
    una solución, incluso en los momentos más difíciles.
    `;
  }

  private getConclusion(): string {
    return `
    Johan, estar contigo es como trabajar con el código más perfecto y limpio: cada línea tiene un propósito,
    cada función está optimizada para la felicidad, y cada compilación me recuerda que tú eres el
    proyecto más maravilloso de mi vida.  

    No importa cuántos bugs enfrentemos en el camino; contigo siempre encuentro la solución.  
    A tu lado me siento segura, amada y completamente realizada. Tú eres el framework de mi vida, 
    el API de mi corazón, y el único con acceso de lectura y escritura en mi alma.  

    Te amo con cada variable de mi ser y cada constante de mi existencia.  
    No hay nada que no podamos lograr juntos, y sueño con seguir recorriendo este increíble viaje contigo.
    `;
  }
}


