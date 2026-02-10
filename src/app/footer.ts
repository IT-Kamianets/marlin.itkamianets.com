import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="footer mt-auto py-5 bg-dark text-light">
      <div class="container text-center">
        <h2 class="mb-4">MARLIN</h2>
        <p class="mb-4">Студія краси, де народжується ваша впевненість.</p>
        <div class="social-links mb-4">
          <a href="https://www.instagram.com/marlin_beauty_starkon?igsh=MTlqcHg0YzJ5eXp2bw==" target="_blank" class="instagram-link">
            <i class="bi bi-instagram"></i> @marlin_beauty_starkon
          </a>
        </div>
        <hr class="my-4 bg-secondary">
        <p class="small mb-0">&copy; 2026 Marlin Beauty Studio. Всі права захищені.</p>
      </div>
    </footer>
  `
})
export class FooterComponent {}
