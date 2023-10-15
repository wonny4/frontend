console.log("app is running!");

// 컨벤션을 익혀봅시다

class App {
  // 일종의 변수선언
  $target = null; // DOM을 가르킬때 $로 표기
  data = [];

  constructor($target) {
    this.$target = $target;

    this.darkModeToggle = new DarkModeToggle({
      $target,
    });
    
    this.searchInput = new SearchInput({
      $target,
      onSearch: (keyword) => {
        api.fetchCats(keyword).then(({ data }) => this.setState(data));
      },
    });

    this.searchResult = new SearchResult({
      $target,
      initialData: this.data,
      onClick: (image) => {
        this.imageInfo.setState({
          visible: true,
          image,
        });
      },
    });

    this.imageInfo = new ImageInfo({
      $target,
      data: {
        visible: false,
        image: null,
      },
    });
  }

  setState(nextData) {
    console.log(this);
    this.data = nextData;
    this.searchResult.setState(nextData);
  }
}
