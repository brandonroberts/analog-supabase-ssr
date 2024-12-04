import { afterNextRender, computed, Injectable, signal } from "@angular/core";
import { createBrowserClient } from "@supabase/ssr";
import { SupabaseClient } from "@supabase/supabase-js";

@Injectable({
  providedIn: 'root',
})
export class SupabaseAuthService {
  private supabase!: SupabaseClient;
  private session = signal<unknown>(null);
  readonly loggedIn = computed(() => !!this.session());

  constructor() {
    afterNextRender(() => {
      this.supabase = createBrowserClient(import.meta.env['VITE_PUBLIC_SUPABASE_URL'], import.meta.env['VITE_PUBLIC_SUPABASE_ANON_KEY'])
      this.supabase.auth.getSession().then(({ data: { session } }) => {
        this.session.set(session);
      });

      this.supabase.auth.onAuthStateChange((_event, session) => {
        this.session.set(session);
      });
    });
  }

  async logout() {
    await this.supabase.auth.signOut();
  }
}