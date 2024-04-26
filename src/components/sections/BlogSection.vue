<script>
import BlogCard from "@/components/cards/BlogCard.vue";
import news1 from "@/assets/images/news-1.jpg";
import news2 from "@/assets/images/news-2.jpg";
import news3 from "@/assets/images/news-3.jpg";

export default {
  components: { BlogCard },
  data() {
    return {
      blogData: [
        {
          blogImageUrl: news1,
          blogCategory: "Types of Work Visa in Nigeria",
          blogTime: "- 2 min read",
          blogTitle: "How to Apply for a Business Visa?",
          blogContent:
            "Zinafri provides Immigration consulting  which involves providing guidance, advice, and assistance to individuals, families, businesses, or organizations  Our team comprises experienced immigration consultants dedicated to providing personalized guidance tailored to your specific needs",
          blogAuthor: "Emmanuel",
          blogDate: "January 10, 2024",
        },
        {
          blogImageUrl: news2,
          blogCategory: "Types of Work Visa in Nigeria",
          blogTime: "- 3 min read",
          blogTitle: "How to Apply for a TWP Visa?",
          blogContent:
            "Zinafri provides Immigration consulting  which involves providing guidance, advice, and assistance to individuals, families, businesses, or organizations  Our team comprises experienced immigration consultants dedicated to providing personalized guidance tailored to your specific needs",
          blogAuthor: "Emmanuel",
          blogDate: "January 05, 2024",
        },
        // {
        //   blogImageUrl: news3,
        //   blogCategory: "Types of Work Visa in Nigeria",
        //   blogTime: "- 1 min read",
        //   blogTitle: "How to Apply for a STR Visa?",
        //   blogContent:
        //     "Zinafri provides Immigration consulting  which involves providing guidance, advice, and assistance to individuals, families, businesses, or organizations  Our team comprises experienced immigration consultants dedicated to providing personalized guidance tailored to your specific needs",
        //   blogAuthor: "Michael Odin",
        //   blogDate: "December 28, 2023",
        // },
      ],
    };
  },
};
</script>
<template>
  <div
    class="blog container mx-auto flex flex-wrap items-center justify-center md:mt-24 mt-16"
  >
    <div class="flex flex-col gap-4 items-center md:w-4/6 px-4">
      <p class="text-header text-center">Our Stories & Latest News</p>
      <p class="text-base text-center text-secondary-200">
        In today's fast-paced world, staying informed about the latest news and
        updates in Nigeria immigration is essential. Our News and Updates
        section is your go-to resource for staying connected and up-to-date with
        the latest developments NIgeria visa and immigration services.
      </p>
    </div>
    <div class="flex flex-col md:flex-row mt-16 gap-3">
      <div
        v-for="(blog, index) in blogData"
        :key="index"
        class="w-full hover:shadow-md"
      >
        <BlogCard
          :blogCardImage="blog.blogImageUrl"
          :blogCategory="blog.blogCategory"
          :blogTitle="blog.blogTitle"
          :blogTime="blog.blogTime"
          :blogContent="blog.blogContent"
          :blogAuthor="blog.blogAuthor"
          :blogDate="blog.blogDate"
        >
          <!-- Blog Card Component -->
        </BlogCard>
      </div>
    </div>
  </div>
</template>

<!-- Photo by <a href="https://unsplash.com/@convertkit?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">ConvertKit</a> on <a href="https://unsplash.com/photos/white-and-red-labeled-box-htQznS-Rx7w?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a> -->

<!-- 
Photo by <a href="https://unsplash.com/@agusdietrich?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Agus Dietrich</a> on <a href="https://unsplash.com/photos/person-holding-passport-eUjufrdx_bM?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
   -->

<!-- Photo by <a href="https://unsplash.com/@mantashesthaven?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Mantas Hesthaven</a> on <a href="https://unsplash.com/photos/man-holding-luggage-photo-_g1WdcKcV3w?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
   -->
