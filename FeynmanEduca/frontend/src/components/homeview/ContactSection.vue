<template>
      <!-- Contact Section -->
  <section id="contact" class="py-5">
    <div class="container">
      <h2>Entre em Contato</h2>
      <p>Se você tiver alguma dúvida ou consulta, não hesite em entrar em contato conosco.</p>
      <form>
        <div class="row">
          <div class="col-md-6">
            <div class="mb-3">
              <label for="name" class="form-label">Nome</label>
              <input type="text" class="form-control" id="name" placeholder="Digite seu nome">
            </div>
          </div>
          <div class="col-md-6">
            <div class="mb-3">
              <label for="email" class="form-label">Email</label>
              <input type="email" class="form-control" id="email" placeholder="Digite seu email">
            </div>
          </div>
        </div>
        <div class="mb-3">
          <label for="message" class="form-label">Mensagem</label>
          <textarea class="form-control" id="message" rows="4" placeholder="Digite sua mensagem"></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Enviar</button>
      </form>
    </div>
  </section>
</template>