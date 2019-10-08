import React from 'react';
import './style.css'
import '../../bootstrap.min.css'

const Conteudo = () => (
    <div className="container">
        <div className="image"></div>
        <p className="post"> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Maecenas faucibus enim eget pellentesque porta. Morbi tempor id
            orci lacinia lacinia. Maecenas tempor dictum sapien in blandit.
            Donec egestas ligula in eros condimentum elementum. In risus purus,
            maximus non augue quis, tincidunt hendrerit diam. Curabitur aliquet
            semper nunc vel consequat. Nulla varius mattis libero. Cras vitae dolor posuere,
             feugiat ipsum eget, varius erat. Proin efficitur enim eu odio fermentum aliquet.
              Curabitur interdum, velit at pharetra rhoncus, lectus odio laoreet risus,
               sit amet finibus metus orci quis mauris. Vestibulum et lectus eget orci
                tempus gravida sed ut dolor. Orci varius natoque penatibus et magnis dis
                 parturient montes, nascetur ridiculus mus. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Aenean velit eros, malesuada vel semper ut,
            vulputate nec sapien. Nam eu lacus mollis, laoreet odio in, commodo magna.</p>
        <textarea></textarea>
        <div className="botao">
            <button type="button" class="btn btn-warning btn-lg center enviar">Enviar</button>
        </div>
    </div>


);

export default Conteudo;