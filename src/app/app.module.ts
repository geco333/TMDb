import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { AppComponent } from './app.component';
import { SearchComponent } from './search-form/search.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { MovieDetailsComponent } from './search-result/movie-details/movie-details.component';
import { SelectedRelatedListComponent } from './search-result/movie-details/selected-related-list/selected-related-list.component';
import { SearchResultListComponent } from './search-result/search-result-list/search-result-list.component';
import { TrendingListComponent } from './trending/trending-list/trending-list.component';
import { TrendingComponent } from './trending/trending.component';
import { TrendingSelectedDetailsComponent } from './trending/trending-selected-details/trending-selected-details.component';
import { RouterModule, Routes } from '@angular/router';
// tslint:disable-next-line: max-line-length
import { SearchResultListItemComponent } from './search-result/search-result-list/search-result-list-item/search-result-list-item.component';
import { DiscoverComponent } from './discover/discover.component';
import { DiscoverFiltersComponent } from './discover/discover-filters/discover-filters.component';
import { DiscoverListComponent } from './discover/discover-list/discover-list.component';
import { RelatedListsComponent } from './discover/discover-list/disover-related-lists/related-lists.component';

const appRoutes: Routes = [{path: '', redirectTo: 'trending', pathMatch: 'full'},
                           {path: 'trending', component: TrendingComponent},
                           {path: 'discover', component: DiscoverComponent},
                           {path: 'search/movie/:title', component: SearchResultComponent}];

@NgModule({
   declarations: [
      AppComponent,
      SearchComponent,
      SearchResultComponent,
      SearchResultListComponent,
      SearchResultListItemComponent,
      SelectedRelatedListComponent,
      MovieDetailsComponent,
      TrendingComponent,
      TrendingSelectedDetailsComponent,
      TrendingListComponent,
      DiscoverComponent,
      DiscoverFiltersComponent,
      DiscoverListComponent,
      RelatedListsComponent,
   ],
   imports: [
      BrowserModule,
      FormsModule,
      RouterModule.forRoot(appRoutes),
      NgbModule,
      BrowserAnimationsModule,
      MatToolbarModule, MatIconModule,
      MatListModule, MatButtonModule,
      MatInputModule,
      HttpClientModule,
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
