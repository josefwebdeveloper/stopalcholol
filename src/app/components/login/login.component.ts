import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ],
  template: `
    <div class="login-container">
      <mat-card class="login-card">
        <mat-card-header>
          <mat-card-title>Welcome to StopAlcohol+</mat-card-title>
          <mat-card-subtitle>Sign in to track your progress</mat-card-subtitle>
        </mat-card-header>
        
        <mat-card-content>
          <div class="logo-container">
            <img src="assets/logo.png" alt="StopAlcohol+ Logo" class="app-logo">
          </div>
          
          <p class="description">
            Join our community and start your journey to a healthier lifestyle.
            Track your progress, set goals, and stay motivated.
          </p>
        </mat-card-content>
        
        <mat-card-actions>
          <button 
            mat-raised-button 
            color="primary" 
            class="google-btn"
            (click)="loginWithGoogle()">
            <mat-icon>
              <svg viewBox="0 0 48 48">
                <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12
                  s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24
                  s8.955,20,20,20s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/>
                <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657
                  C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/>
                <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36
                  c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/>
                <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571
                  c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/>
              </svg>
            </mat-icon>
            Sign in with Google
          </button>
        </mat-card-actions>
      </mat-card>
    </div>
  `,
  styles: [`
    .login-container {
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      background: linear-gradient(135deg, #1976d2 0%, #64b5f6 100%);
      padding: 20px;
    }

    .login-card {
      max-width: 400px;
      width: 100%;
      padding: 40px;
      text-align: center;
      border-radius: 12px;
      box-shadow: 0 8px 16px rgba(0,0,0,0.1);
    }

    .logo-container {
      margin: 30px 0;
    }

    .app-logo {
      width: 120px;
      height: 120px;
      object-fit: contain;
    }

    .description {
      color: rgba(0,0,0,0.6);
      margin: 20px 0;
      line-height: 1.6;
    }

    .google-btn {
      width: 100%;
      padding: 8px 16px;
      font-size: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 12px;
    }

    mat-icon {
      width: 24px;
      height: 24px;
    }

    mat-card-title {
      font-size: 24px;
      margin-bottom: 8px;
    }

    mat-card-subtitle {
      font-size: 16px;
      margin-bottom: 24px;
    }
  `]
})
export class LoginComponent {
  constructor(private authService: AuthService) {}

  loginWithGoogle() {
    this.authService.loginWithGoogle();
  }
} 